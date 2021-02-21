using System;
using System.Linq;
using DocStore.Core.Entities;
using DocStore.Core.Interfaces;
using DocStore.Core.Utilities;

namespace DocStore.Infrastructure
{
    public class DocumentsQueryRepository : IDocumentsQueryRepository
    {
        private readonly EfContext _dbContext;

        public DocumentsQueryRepository(EfContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        public IQueryable<Doc> GetDocumentsByCollection(string collection)
        {
            Require.NotNullOrEmpty(collection, "collection needs to be defined");
            return _dbContext.Set<Doc>().Where(e => e.CollectionName.Equals(collection) && e.IsDeleted == false);
        }
    }
}