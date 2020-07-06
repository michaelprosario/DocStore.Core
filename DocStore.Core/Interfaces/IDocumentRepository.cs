using System.Linq;
using DocStore.Core.Entities;

namespace DocStore.Core.Interfaces
{
    public interface IDocumentsRepository
    {
        IQueryable<Doc> GetDocumentsByCollection(string collection);
    }
}