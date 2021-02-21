using System.Runtime.Serialization;
using DocStore.Core.Entities;

namespace DocStore.Core.Responses
{
    [DataContract]
    public class StoreDocumentResponse : Response
    {
        [DataMember] public Doc Document { get; set; }
    }
}