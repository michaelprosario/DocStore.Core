
namespace DocStore.Core.Requests
{
    public class GetDocumentQuery : Request
    {

        public GetDocumentQuery() { }

        public string Id { get; set; } = "";
    }
}