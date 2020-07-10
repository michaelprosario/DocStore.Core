using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace DocStore.Core.Requests
{
    [DataContract]
    public class DeleteDocumentCommand : Request
    {
        [DataMember] public string Id { get; set; } = "";
    }
}