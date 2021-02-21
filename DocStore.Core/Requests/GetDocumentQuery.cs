using System.Runtime.Serialization;

namespace DocStore.Core.Requests
{
    [DataContract]
    public class GetDocumentQuery : Request
    {
        [DataMember] public string Id { get; set; } = "";
    }
}