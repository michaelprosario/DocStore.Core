using DocStore.Core.Entities;

namespace DocStore.Core.Requests
{
    public class AddDocumentCommand : Request
    {
        public Doc Document { get; set; }
    }
}