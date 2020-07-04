using System.Runtime.Serialization;

namespace DocStore.Core.Requests
{
    public class GetDocumentsByCollection : Request
    {
        [DataMember] public string Collection = "";
    }
}