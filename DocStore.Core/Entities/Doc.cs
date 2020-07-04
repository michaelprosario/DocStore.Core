using System;

namespace DocStore.Core.Entities
{
    public class Doc
    {
        public string CollectionName = "";
        public DateTime CreatedAt;
        public string CreatedBy = "";
        public DateTime? DeletedAt;
        public string DeletedBy = "";
        public string Id = "";
        public bool IsDeleted = false;
        public string JsonData = "";
        public string Name = "";
        public DateTime? UpdatedAt;
        public string UpdatedBy = "";
    }
}