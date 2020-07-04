using System.Runtime.Serialization;

namespace DocStore.Core.Requests
{
    public class GetDocumentQuery : Request
    {
        [DataMember] public string Id = "";
    }
}