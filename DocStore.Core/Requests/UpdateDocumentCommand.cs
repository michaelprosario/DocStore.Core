using DocStore.Core.Entities;

namespace DocStore.Core.Requests
{
    public class UpdateDocumentCommand : Request
    {
        public Doc Document { get; set; }
    }
}