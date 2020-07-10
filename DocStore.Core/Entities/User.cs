using System;
using DocStore.Core.Interfaces;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace DocStore.Core.Entities
{
    [DataContract]
    public class User : BaseEntity, ITimeStampedEntity
    {
        [DataMember] public string Id { get; set; }
        [DataMember] public string FirstName { get; set; }
        [DataMember] public string LastName { get; set; }
        [DataMember] public string UserName { get; set; }
        [DataMember] public byte[] PasswordHash { get; set; }
        [DataMember] public byte[] PasswordSalt { get; set; }
        [DataMember] public string CreatedBy { get; set; }
        [DataMember] public string UpdatedBy { get; set; }
        [DataMember] public DateTime CreatedAt { get; set; }
        [DataMember] public DateTime UpdatedAt { get; set; }
    }
}