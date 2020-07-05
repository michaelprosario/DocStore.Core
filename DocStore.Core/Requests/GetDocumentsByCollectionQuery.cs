namespace DocStore.Core.Requests
{
    public class GetDocumentsByCollection : Request
    {
        public string Collection { get; set; } = "";
    }
}