using System;
using System.Collections.Generic;
using System.Linq;
using DocStore.Core.Entities;
using DocStore.Core.Interfaces;
using DocStore.Core.Utilities;
using Microsoft.EntityFrameworkCore;

namespace DocStore.Infrastructure
{
    public class EfRepository<T> : IRepository<T> where T : BaseEntity
    {
        private readonly EfContext _dbContext;

        public EfRepository(EfContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        public T GetById(string id)
        {
            if (string.IsNullOrEmpty(id)) throw new ArgumentException("message", nameof(id));

            return _dbContext.Set<T>().SingleOrDefault(e => e.Id.Equals(id));
        }

        public bool RecordExists(string id)
        {
            Require.NotNullOrEmpty(id, "id is required");
            return _dbContext.Set<T>().Count(e => e.Id.Equals(id)) > 0;
        }

        public List<T> List()
        {
            return _dbContext.Set<T>().ToList();
        }

        public T Add(T entity)
        {
            if (entity is null) throw new ArgumentNullException(nameof(entity));

            _dbContext.Set<T>().Add(entity);
            _dbContext.SaveChanges();
            return entity;
        }

        public void Delete(T entity)
        {
            if (entity is null) throw new ArgumentNullException(nameof(entity));

            _dbContext.Set<T>().Remove(entity);
            _dbContext.SaveChanges();
        }

        public void Update(T entity)
        {
            if (entity is null) throw new ArgumentNullException(nameof(entity));

            _dbContext.Entry(entity).State = EntityState.Modified;
            _dbContext.SaveChanges();
        }
    }
}