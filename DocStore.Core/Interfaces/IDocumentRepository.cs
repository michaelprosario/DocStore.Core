using System.Linq;
using DocStore.Core.Entities;

namespace DocStore.Core.Interfaces
{
    public interface IDocumentsQueryRepository
    {
        IQueryable<Doc> GetDocumentsByCollection(string collection);
    }
}