using System;

namespace DocStore.Core.Interfaces
{
    public interface ITimeStampedEntity
    {
        string CreatedBy { get; set; }
        string UpdatedBy { get; set; }
        DateTime CreatedAt { get; set; }
        DateTime UpdatedAt { get; set; }
    }
}