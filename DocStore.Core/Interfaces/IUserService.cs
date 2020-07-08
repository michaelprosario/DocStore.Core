using DocStore.Core.Entities;
using DocStore.Core.Requests;
using DocStore.Core.Responses;

namespace DocStore.Core.Interfaces
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        User GetById(string id);
        User Create(User user, string password);
        NewRecordResponse RegisterUser(RegisterUserCommand command);
    }
}