
using DocStore.Core.Entities;
using DocStore.Core.Enums;
using DocStore.Core.Interfaces;
using DocStore.Core.Requests;
using DocStore.Core.Responses;
using DocStore.Core.Utilities;
using DocStore.Core.Validators;
using System;
using System.Threading.Tasks;

namespace DocStore.Core.Services
{
    public class DocumentsService : IDocumentsService
    {
        private readonly IRepository<Doc> _repository;

        public DocumentsService(IRepository<Doc> repository)
        {
            Require.ObjectNotNull(repository, "repository should be defined");
            this._repository = repository;
        }

        public NewRecordResponse AddDocument(AddDocumentCommand command)
        {

            var response = new NewRecordResponse
            {
                Code = ResponseCode.Success
            };

            Require.ObjectNotNull(command, "Request is null.");

            var validationResult = new AddDocumentCommandValidator().Validate(command);
            if (!validationResult.IsValid)
            {
                response.ValidationErrors = validationResult.Errors;
                return response;
            }

            command.Document.CreatedAt = DateTime.Now;
            command.Document.CreatedBy = "fixme";
            command.Document.Id = Guid.NewGuid().ToString();

            var doc = _repository.Add(command.Document);
            response.RecordId = doc.Id;

            return response;
        }

        public Response UpdateDocument(UpdateDocumentCommand command)
        {
            var response = new Response
            {
                Code = ResponseCode.Success
            };

            Require.ObjectNotNull(command, "Request is null.");
            var validationResult = new UpdateDocumentCommandValidator().Validate(command);
            if (!validationResult.IsValid)
            {
                response.Code = ResponseCode.BadRequest;
                response.ValidationErrors = validationResult.Errors;
                return response;
            }

            command.Document.UpdatedAt = DateTime.Now;
            command.Document.UpdatedBy = "fixme";

            _repository.Update(command.Document);

            return response;
        }

        public GetDocumentResponse GetDocument(GetDocumentQuery query)
        {
            Require.ObjectNotNull(query, "query is required");
            var validationResult = new GetDocumentQueryValidator().Validate(query);
            if (!validationResult.IsValid)
            {
                var response = new GetDocumentResponse
                {
                    Code = ResponseCode.BadRequest,
                    ValidationErrors = validationResult.Errors
                };
                return response;
            }

            var doc = _repository.GetById(query.Id);
            return new GetDocumentResponse
            {
                Document = doc
            };
        }

        public Response DeleteDocument(DeleteDocumentCommand command)
        {
            var response = new Response
            {
                Code = ResponseCode.Success
            };

            Require.ObjectNotNull(command, "Request is null.");
            var validationResult = new DeleteDocumentCommandValidator().Validate(command);
            if (!validationResult.IsValid)
            {
                response.Code = ResponseCode.BadRequest;
                response.ValidationErrors = validationResult.Errors;
                return response;
            }

            var record = _repository.GetById(command.Id);
            if (record == null)
            {
                response.Code = ResponseCode.NotFound;
                return response;
            }

            record.DeletedAt = DateTime.Now;
            record.DeletedBy = command.UserId;
            record.IsDeleted = true;
            _repository.Update(record);

            return response;
        }
    }
}