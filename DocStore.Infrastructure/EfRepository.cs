using DocStore.Core.Entities;
using DocStore.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace DocStore.Infrastructure
{
    public class EfRepository<T> : IRepository<T> where T : BaseEntity
    {
        private readonly EfContext _dbContext;
        public EfRepository(EfContext dbContext)
        {
            _dbContext = dbContext ?? throw new System.ArgumentNullException(nameof(dbContext));
        }
        public T GetById(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                throw new System.ArgumentException("message", nameof(id));
            }

            return _dbContext.Set<T>().SingleOrDefault(e => e.Id.Equals(id));
        }
        public List<T> List()
        {
            return _dbContext.Set<T>().ToList();
        }
        public T Add(T entity)
        {
            if (entity is null)
            {
                throw new System.ArgumentNullException(nameof(entity));
            }

            _dbContext.Set<T>().Add(entity);
            _dbContext.SaveChanges();
            return entity;
        }
        public void Delete(T entity)
        {
            if (entity is null)
            {
                throw new System.ArgumentNullException(nameof(entity));
            }

            _dbContext.Set<T>().Remove(entity);
            _dbContext.SaveChanges();
        }
        public void Update(T entity)
        {
            if (entity is null)
            {
                throw new System.ArgumentNullException(nameof(entity));
            }

            _dbContext.Entry(entity).State = EntityState.Modified;
            _dbContext.SaveChanges();
        }
    }
}
