using System;
using System.Linq;
using DocStore.Core.Entities;
using DocStore.Core.Enums;
using DocStore.Core.Interfaces;
using DocStore.Core.Requests;
using DocStore.Core.Responses;
using DocStore.Core.Utilities;
using DocStore.Core.Validators;

namespace DocStore.Core.Services
{
    public class DocumentsService : IDocumentsService
    {
        private readonly IDocumentsQueryRepository _documentsQueryRepository;
        private readonly IRepository<Doc> _repository;

        public DocumentsService(IRepository<Doc> repository, IDocumentsQueryRepository documentsQueryRepository)
        {
            Require.ObjectNotNull(repository, "repository should be defined");
            Require.ObjectNotNull(documentsQueryRepository, "documentsRepository should be defined");
            _repository = repository;
            _documentsQueryRepository = documentsQueryRepository;
        }

        public NewRecordResponse AddDocument(AddDocumentCommand command)
        {
            Require.ObjectNotNull(command, "command is required");
            var response = new NewRecordResponse
            {
                Code = ResponseCode.Success
            };

            var validationResult = new AddDocumentCommandValidator().Validate(command);
            if (!validationResult.IsValid)
            {
                response.ValidationErrors = validationResult.Errors;
                response.Code = ResponseCode.BadRequest;
                return response;
            }

            PopulateNewDocumentFields(command.Document, command.UserId);

            var doc = _repository.Add(command.Document);
            response.RecordId = doc.Id;

            return response;
        }

        public Doc PopulateNewDocumentFields(Doc document, string userId)
        {
            Require.ObjectNotNull(document,"document is required");
            document.CreatedAt = DateTime.Now;
            document.CreatedBy = userId;
            if (string.IsNullOrEmpty(document.Id))
            {
                document.Id = Guid.NewGuid().ToString();    
            }
            
            return document;
        }

        public StoreDocumentResponse StoreDocument(StoreDocumentCommand command)
        {
            Require.ObjectNotNull(command,"command is defined");
            var response = new StoreDocumentResponse();
            var validationResult = new StoreDocumentCommandValidator().Validate(command);
            if (!validationResult.IsValid)
            {
                response.ValidationErrors = validationResult.Errors;
                response.Code = ResponseCode.BadRequest;
                return response;
            }
            
            var recordExists = _repository.RecordExists(command.Document.Id);
            string currentRecordId = "";
            if (recordExists)
            {
                currentRecordId = command.Document.Id;
                PopulateDocumentForUpdate(command.Document, command.UserId);
                _repository.Update(command.Document);
            }
            else
            {
                PopulateNewDocumentFields(command.Document, command.UserId);
                var newDocument = _repository.Add(command.Document);
                currentRecordId = newDocument.Id;
            }

            var documentToReturn = _repository.GetById(currentRecordId);
            response.Document = documentToReturn;
            return response;
        }

        public Response UpdateDocument(UpdateDocumentCommand command)
        {
            Require.ObjectNotNull(command, "Command is required");

            var response = new Response
            {
                Code = ResponseCode.Success
            };

            var validationResult = new UpdateDocumentCommandValidator().Validate(command);
            if (!validationResult.IsValid)
            {
                response.Code = ResponseCode.BadRequest;
                response.ValidationErrors = validationResult.Errors;
                return response;
            }

            PopulateDocumentForUpdate(command.Document, command.UserId);
            _repository.Update(command.Document);

            return response;
        }

        private void PopulateDocumentForUpdate(Doc document, string userId)
        {
            document.UpdatedAt = DateTime.Now;
            document.UpdatedBy = userId;
        }

        public GetDocumentsResponse GetDocumentsByCollection(GetDocumentsByCollection query)
        {
            Require.ObjectNotNull(query, "query is required");
            var validationResult = new GetDocumentsByCollectionQueryValidator().Validate(query);
            if (!validationResult.IsValid)
            {
                var response = new GetDocumentsResponse
                {
                    Code = ResponseCode.BadRequest,
                    ValidationErrors = validationResult.Errors
                };
                return response;
            }

            var list = _documentsQueryRepository.GetDocumentsByCollection(query.Collection);
            return new GetDocumentsResponse
            {
                Documents = list.ToList()
            };
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
            Require.ObjectNotNull(command, "Command is required");
            var response = new Response
            {
                Code = ResponseCode.Success
            };

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