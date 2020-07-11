using System;
using DocStore.Core.Requests;
using DocStore.Core.Responses;
using DocStore.Core.Services;
using DocStore.Core.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DocStore.Server.Controllers
{
    //[Authorize]
    [ApiController]
    public class DocumentsController : Controller
    {
        private readonly IDocumentsService _documentsService;

        public DocumentsController(IDocumentsService documentsService)
        {
            _documentsService = documentsService ?? throw new ArgumentNullException(nameof(documentsService));
        }

        private string GetUserName()
        {
            return "fixme";
        }

        [HttpPost("AddDocument")]
        public NewRecordResponse AddDocument([FromBody] AddDocumentCommand command)
        {
            Require.ObjectNotNull(command, "command should not be null");
            command.UserId = GetUserName();
            return _documentsService.AddDocument(command);
        }

        [HttpPost("EditDocument")]
        public Response EditDocument([FromBody] UpdateDocumentCommand command)
        {
            command.UserId = GetUserName();
            return _documentsService.UpdateDocument(command);
        }

        [HttpPost("DeleteDocument")]
        public Response DeleteDocument([FromBody] DeleteDocumentCommand command)
        {
            command.UserId = GetUserName();
            return _documentsService.DeleteDocument(command);
        }

        [HttpPost("GetDocumentsByCollection")]
        public GetDocumentsResponse GetDocumentsByCollection([FromBody] GetDocumentsByCollection query)
        {
            Require.ObjectNotNull(query, "query is null");
            query.UserId = GetUserName();
            return _documentsService.GetDocumentsByCollection(query);
        }

        [HttpPost("GetDocument")]
        public GetDocumentResponse GetDocument([FromBody] GetDocumentQuery query)
        {
            Require.ObjectNotNull(query, "query should not be null");
            query.UserId = GetUserName();
            return _documentsService.GetDocument(query);
        }
    }
}