using System;
using DocStore.Core.Requests;
using DocStore.Core.Responses;
using DocStore.Core.Services;
using DocStore.Core.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace DocStore.Server.Controllers
{
    public class DocumentsController : Controller
    {
        private readonly IDocumentsService _documentsService;

        public DocumentsController(IDocumentsService documentsService)
        {
            _documentsService = documentsService ?? throw new ArgumentNullException(nameof(documentsService));
        }

        string getUserName()
        {
            return "fixme";
        }

        [HttpPost("AddDocument")]
        public NewRecordResponse AddDocument([FromBody]AddDocumentCommand command)
        {
            Require.ObjectNotNull(command, "command should not be null");
            command.UserId = getUserName();
            return _documentsService.AddDocument(command);
        }

        [HttpPost("EditDocument")]
        public Response EditDocument([FromBody] UpdateDocumentCommand command)
        {
            command.UserId = getUserName();
            return _documentsService.UpdateDocument(command);
        }

        [HttpPost("DeleteDocument")]
        public Response DeleteDocument([FromBody] DeleteDocumentCommand command)
        {
            command.UserId = getUserName();
            return _documentsService.DeleteDocument(command);
        }

        /*
        [HttpPost("ListDocuments")]
        public async Task<ListDocumentsResponse> ListDocumentsAsync([FromBody] ListDocumentsQuery query)
        {
            query.UserId = GetUserName();
            return await _mediator.Send(query);
        }*/

        [HttpPost("GetDocument")]
        public GetDocumentResponse GetDocument([FromBody] GetDocumentQuery query)
        {
            query.UserId = getUserName();
            return _documentsService.GetDocument(query);
        }

    }
}