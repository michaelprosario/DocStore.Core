using DocStore.Core.Entities;

namespace DocStore.Core.Interfaces
{
    public interface IUserDataServices : IRepository<User>
    {
        bool UserNameUsed(string userName);
        User GetUserByName(string username);
    }
}