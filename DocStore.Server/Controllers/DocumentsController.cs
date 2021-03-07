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
    [Route("api/[controller]")]
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

        [HttpPost("v1/AddDocument")]
        public NewRecordResponse AddDocument([FromBody] AddDocumentCommand command)
        {
            Require.ObjectNotNull(command, "command should not be null");
            command.UserId = GetUserName();
            return _documentsService.AddDocument(command);
        }

        [HttpPost("v1/EditDocument")]
        public Response EditDocument([FromBody] UpdateDocumentCommand command)
        {
            command.UserId = GetUserName();
            return _documentsService.UpdateDocument(command);
        }
        
        [HttpPost("v1/StoreDocument")]
        public StoreDocumentResponse StoreDocument([FromBody] StoreDocumentCommand command)
        {
            command.UserId = GetUserName();
            return _documentsService.StoreDocument(command);
        }        

        [HttpPost("v1/DeleteDocument")]
        public Response DeleteDocument([FromBody] DeleteDocumentCommand command)
        {
            command.UserId = GetUserName();
            return _documentsService.DeleteDocument(command);
        }

        [HttpPost("v1/GetDocumentsByCollection")]
        public GetDocumentsResponse GetDocumentsByCollection([FromBody] GetDocumentsByCollection query)
        {
            Require.ObjectNotNull(query, "query is null");
            query.UserId = GetUserName();
            return _documentsService.GetDocumentsByCollection(query);
        }

        [HttpPost("v1/GetDocument")]
        public GetDocumentResponse GetDocument([FromBody] GetDocumentQuery query)
        {
            Require.ObjectNotNull(query, "query should not be null");
            query.UserId = GetUserName();
            return _documentsService.GetDocument(query);
        }
    }
}