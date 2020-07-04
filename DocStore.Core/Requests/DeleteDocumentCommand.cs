using System.Runtime.Serialization;

namespace DocStore.Core.Requests
{
    public class DeleteDocumentCommand : Request
    {
        [DataMember] public string Id = "";
    }
}