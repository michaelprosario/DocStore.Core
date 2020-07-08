using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using DocStore.Core.Entities;
using DocStore.Core.Enums;
using DocStore.Core.Interfaces;
using DocStore.Core.Requests;
using DocStore.Core.Responses;
using DocStore.Core.Utilities;
using DocStore.Core.Validators;
using FluentValidation.Results;

namespace DocStore.Core.Services
{
    public class UserService : IUserService
    {
        public UserService(IUserDataServices users)
        {
            Require.ObjectNotNull(users, "User data services need to be defined");

            _users = users;
        }

        private IUserDataServices _users { get; }

        public User Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = _users.GetUserByName(username);

            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        public User Create(User user, string password)
        {
            Require.ObjectNotNull(user, "User needs to be defined.");
            Require.NotNullOrEmpty(password, "Password needs to be defined.");

            // check to see if user name exists
            if (_users.UserNameUsed(user.UserName))
                throw new ApplicationException($"User name already used: {user.UserName} ");

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            user.Id = Guid.NewGuid().ToString();

            _users.Add(user);

            return user;
        }

        public User GetById(string id)
        {
            Require.NotNullOrEmpty(id, "User id must be defined.");
            return _users.GetById(id);
        }

        public NewRecordResponse RegisterUser(RegisterUserCommand command)
        {
            var response = new NewRecordResponse
            {
                Code = ResponseCode.Success
            };

            Require.ObjectNotNull(command, "Request is null.");
            var validationResult = new RegisterUserRequestValidator().Validate(command);
            if (!validationResult.IsValid)
            {
                response.ValidationErrors = validationResult.Errors;
                return response;
            }

            var password = command.Password;
            var user = new User
            {
                FirstName = command.FirstName,
                LastName = command.LastName,
                UserName = command.UserName
            };

            try
            {
                Create(user, password);
            }
            catch (Exception ex)
            {
                response.ValidationErrors = new List<ValidationFailure> {new ValidationFailure("", ex.Message)};
                return response;
            }

            return response;
        }

        // https://github.com/cornflourblue/aspnet-core-registration-login-api/blob/master/Services/UserService.cs
        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password))
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }

        // https://github.com/cornflourblue/aspnet-core-registration-login-api/blob/master/Services/UserService.cs
        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password))
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64)
                throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128)
                throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                for (var i = 0; i < computedHash.Length; i++)
                    if (computedHash[i] != storedHash[i])
                        return false;
            }

            return true;
        }
    }
}