using System.Collections.Generic;
using System.Threading.Tasks;
using DocStore.Core.Entities;

namespace DocStore.Core.Interfaces
{
    public interface IDocumentRepository
    {
        public Task<string> AddDocument(Doc doc);
        public Task DeleteDocument(string recordId);
        public Task<Doc> GetDocument(string recordId);
        public Task<List<Doc>> GetDocuments(string collectionId);
        public Task<List<bool>> RecordExists(string recordId);
        public Task UpdateDocument(Doc doc);
    }
}