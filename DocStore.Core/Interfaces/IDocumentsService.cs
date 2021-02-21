using DocStore.Core.Requests;
using DocStore.Core.Responses;

namespace DocStore.Core.Services
{
    public interface IDocumentsService
    {
        NewRecordResponse AddDocument(AddDocumentCommand command);
        Response DeleteDocument(DeleteDocumentCommand command);
        GetDocumentResponse GetDocument(GetDocumentQuery query);
        Response UpdateDocument(UpdateDocumentCommand command);
        StoreDocumentResponse StoreDocument(StoreDocumentCommand command);
        GetDocumentsResponse GetDocumentsByCollection(GetDocumentsByCollection query);
    }
}