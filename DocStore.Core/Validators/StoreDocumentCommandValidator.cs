using DocStore.Core.Requests;
using FluentValidation;

namespace DocStore.Core.Validators
{
    public class StoreDocumentCommandValidator : AbstractValidator<StoreDocumentCommand>
    {
        public StoreDocumentCommandValidator()
        {
            RuleFor(x => x.Document).NotNull();
            RuleFor(x => x.Document.Name).NotNull().NotEmpty();
            RuleFor(x => x.Document.CollectionName).NotNull().NotEmpty();
            RuleFor(x => x.Document.JsonData).NotNull().NotEmpty();
            RuleFor(x => x.Document).NotNull().NotEmpty();
            RuleFor(x => x.UserId).NotNull().NotEmpty();
        }
    }
}