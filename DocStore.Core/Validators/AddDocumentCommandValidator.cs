using DocStore.Core.Requests;
using FluentValidation;

namespace DocStore.Core.Validators
{
    public class AddDocumentCommandValidator : AbstractValidator<AddDocumentCommand>
    {
        public AddDocumentCommandValidator()
        {
            RuleFor(x => x.Document).NotNull();
            RuleFor(x => x.Document.CollectionName).NotNull().NotEmpty();
            RuleFor(x => x.Document.JsonData).NotNull().NotEmpty();
            RuleFor(x => x.UserId).NotNull().NotEmpty();
        }
    }
}