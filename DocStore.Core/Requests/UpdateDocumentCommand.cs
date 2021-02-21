using System.Runtime.Serialization;
using DocStore.Core.Entities;

namespace DocStore.Core.Requests
{
    [DataContract]
    public class UpdateDocumentCommand : Request
    {
        [DataMember] public Doc Document { get; set; }
    }
}