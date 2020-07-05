namespace DocStore.Core.Requests
{
    public class DeleteDocumentCommand : Request
    {
        public string Id { get; set; } = "";
    }
}