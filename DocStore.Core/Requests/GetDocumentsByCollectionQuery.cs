using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace DocStore.Core.Requests
{
    [DataContract]
    public class GetDocumentsByCollection : Request
    {
        [DataMember] public string Collection { get; set; } = "";
    }
}