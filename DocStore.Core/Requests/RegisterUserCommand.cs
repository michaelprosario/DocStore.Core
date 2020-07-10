using System.Runtime.Serialization;

namespace DocStore.Core.Requests
{
    [DataContract]
    public class RegisterUserCommand
    {
        [DataMember] public string FirstName { get; set; }

        [DataMember] public string LastName { get; set; }

        [DataMember] public string UserName { get; set; }

        [DataMember] public string Password { get; set; }
    }
}