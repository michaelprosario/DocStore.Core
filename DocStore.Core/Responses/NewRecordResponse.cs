using System.Runtime.Serialization;

namespace DocStore.Core.Responses
{
    [DataContract]
    public class NewRecordResponse : Response
    {
        [DataMember] public string RecordId { get; set; }
    }
}