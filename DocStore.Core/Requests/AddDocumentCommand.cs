using System.Runtime.Serialization;
using DocStore.Core.Entities;

namespace DocStore.Core.Requests
{
    [DataContract]
    public class AddDocumentCommand : Request
    {
        [DataMember] public Doc Document;
    }
}