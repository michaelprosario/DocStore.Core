using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace DocStore.Core.Entities
{
    public class Doc : BaseEntity
    {
        public string CollectionName { get; set; } = "";
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; } = "";
        public DateTime? DeletedAt { get; set; }
        public string DeletedBy { get; set; } = "";
        
        [Key]
        public string Id { get; set; } = "";
        public bool IsDeleted { get; set; } = false;
        public string JsonData { get; set; } = "";
        public string Name { get; set; } = "";
        public DateTime? UpdatedAt { get; set; }
        public string UpdatedBy { get; set; } = "";
    }
}