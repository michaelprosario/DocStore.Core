using System;
using System.Collections.Generic;
using System.Linq;
using DocStore.Core.Entities;
using DocStore.Core.Interfaces;
using DocStore.Core.Utilities;

namespace DocStore.Infrastructure
{
    public class UserDataServices : IUserDataServices
    {
        public UserDataServices(EfContext dbContext)
        {
            _dbContext = dbContext;
        }

        public EfContext _dbContext { get; }

        public User Add(User entity)
        {
            if (entity == null) throw new ArgumentNullException();

            _dbContext.Set<User>().Add(entity);
            _dbContext.SaveChanges();
            return entity;
        }

        public void Delete(User entity)
        {
            if (entity == null) throw new ArgumentNullException();

            _dbContext.Set<User>().Remove(entity);
            _dbContext.SaveChanges();
        }

        public bool RecordExists(string id)
        {
            Require.NotNullOrEmpty(id, "id is required");
            return _dbContext.Set<User>().Count(e => e.Id.Equals(id)) > 0;
        }

        public User GetById(string id)
        {
            Require.NotNullOrEmpty(id, "id is required");
            return _dbContext.Set<User>().SingleOrDefault(e => e.Id.Equals(id));
        }

        public User GetUserByName(string userName)
        {
            Require.NotNullOrEmpty(userName, "userName is required");
            return _dbContext.Set<User>().SingleOrDefault(e => e.UserName.Equals(userName));
        }

        public List<User> List()
        {
            return _dbContext.Set<User>().ToList();
        }

        public void Update(User entity)
        {
            throw new NotImplementedException();
        }

        public bool UserNameUsed(string userName)
        {
            if (string.IsNullOrEmpty(userName)) throw new ArgumentException("UserName needs to be defined");

            return _dbContext.Set<User>().Any(e => e.UserName.Equals(userName));
        }
    }
}