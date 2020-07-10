using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace DocStore.Core.Entities
{
    [DataContract]
    public class Doc : BaseEntity
    {
        [DataMember] public string CollectionName { get; set; } = "";
        [DataMember] public DateTime CreatedAt { get; set; }
        [DataMember] public string CreatedBy { get; set; } = "";
        [DataMember] public DateTime? DeletedAt { get; set; }
        [DataMember] public string DeletedBy { get; set; } = "";

        [Key]
        [DataMember]  
        public string Id { get; set; } = "";

        [DataMember] public bool IsDeleted { get; set; } = false;
        [DataMember] public string JsonData { get; set; } = "";
        [DataMember] public string Name { get; set; } = "";
        [DataMember] public DateTime? UpdatedAt { get; set; }
        [DataMember] public string UpdatedBy { get; set; } = "";
    }
}