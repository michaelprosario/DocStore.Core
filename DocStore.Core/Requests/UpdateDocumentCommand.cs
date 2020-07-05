using DocStore.Core.Entities;

namespace DocStore.Core.Requests
{
    public class UpdateDocumentCommand : Request
    {
        public UpdateDocumentCommand() { }
        public Doc Document { get; set; }
    }
}