using System.Runtime.Serialization;

namespace DocStore.Core.Requests
{
    [DataContract]
    public class Request
    {
        [DataMember] public string UserId { get; set; }
    }
}