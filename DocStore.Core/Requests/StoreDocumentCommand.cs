using System.Runtime.Serialization;
using DocStore.Core.Entities;

namespace DocStore.Core.Requests
{
    [DataContract]
    public class StoreDocumentCommand : Request
    {
        [DataMember] public Doc Document { get; set; }
    }
}