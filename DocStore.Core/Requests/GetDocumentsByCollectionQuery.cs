
namespace DocStore.Core.Requests
{
    public class GetDocumentsByCollection : Request
    {
        public GetDocumentsByCollection() { }

        public string Collection { get; set; } = "";
    }
}