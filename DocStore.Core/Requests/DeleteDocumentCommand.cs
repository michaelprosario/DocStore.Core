
namespace DocStore.Core.Requests
{
    public class DeleteDocumentCommand : Request
    {
        public DeleteDocumentCommand() { }
        public string Id { get; set; } = "";
    }
}