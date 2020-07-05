using DocStore.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DocStore.Core.Interfaces
{
    public interface IRepository<T> where T : BaseEntity
    {
        T GetById(string id);
        List<T> List();
        T Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
