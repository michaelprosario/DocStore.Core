using System.Runtime.Serialization;
using DocStore.Core.Entities;

namespace DocStore.Core.Requests
{
    public class UpdateDocumentCommand : Request
    {
        [DataMember] public Doc Document;
    }
}