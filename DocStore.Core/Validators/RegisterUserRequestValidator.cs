using DocStore.Core.Requests;
using FluentValidation;

namespace DocStore.Core.Validators
{
    public class RegisterUserRequestValidator : AbstractValidator<RegisterUserCommand>
    {
        public RegisterUserRequestValidator()
        {
            RuleFor(r => r.FirstName).NotEmpty();
            RuleFor(r => r.LastName).NotEmpty();
            RuleFor(r => r.UserName).NotEmpty().EmailAddress();
            RuleFor(r => r.Password).NotEmpty();
        }
    }
}