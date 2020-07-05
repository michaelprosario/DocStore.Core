using DocStore.Core.Entities;

namespace DocStore.Core.Requests
{
    public class AddDocumentCommand : Request
    {
        public AddDocumentCommand()
        {

        }

        public Doc Document { get; set; }
    }
}