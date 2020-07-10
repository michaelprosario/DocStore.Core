using DocStore.Core.Entities;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace DocStore.Core.Requests
{
    [DataContract]
    public class AddDocumentCommand : Request
    {
        [DataMember]
        public Doc Document { get; set; }
    }
}