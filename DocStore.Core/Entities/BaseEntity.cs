using System.Runtime.Serialization;

namespace DocStore.Core.Entities
{
    [DataContract]
    public abstract class BaseEntity
    {
        [DataMember]
        public string Id { get; set; }
    }
}
