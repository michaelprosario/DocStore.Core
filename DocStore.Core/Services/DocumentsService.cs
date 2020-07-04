using System;
using System.Threading.Tasks;
using DocStore.Core.Enums;
using DocStore.Core.Interfaces;
using DocStore.Core.Requests;
using DocStore.Core.Responses;
using DocStore.Core.Utilities;
using DocStore.Core.Validators;

namespace DocStore.Core.Services
{
    public class DocumentsService
    {
        private readonly IDocumentRepository _repository;

        public DocumentsService(IDocumentRepository repository)
        {
            Require.ObjectNotNull(repository, "repository should be defined");
            this._repository = repository;
        }

        public async Task<NewRecordResponse> AddDocument(AddDocumentCommand command)
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

            var returnId = await _repository.AddDocument(command.Document);
            response.RecordId = returnId;

            return response;
        }

        public async Task<Response> UpdateDocument(UpdateDocumentCommand command)
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

            await _repository.UpdateDocument(command.Document);

            return response;
        }

        public async Task<GetDocumentResponse> GetDocumentResponse(GetDocumentQuery query)
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

            var doc = await _repository.GetDocument(query.Id);
            return new GetDocumentResponse
            {
                Document = doc
            };
        }

        public async Task<Response> DeleteDocumentResponse(DeleteDocumentCommand command)
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

            var record = await _repository.GetDocument(command.Id);
            if (record == null)
            {
                response.Code = ResponseCode.NotFound;
                return response;
            }

            record.DeletedAt = DateTime.Now;
            record.DeletedBy = command.UserId;
            record.IsDeleted = true;
            await _repository.UpdateDocument(record);

            return response;
        }
    }
}