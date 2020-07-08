using System.Runtime.Serialization;

namespace DocStore.Core.DataTransferObjects
{
    [DataContract]
    public class UserDto
    {
        [DataMember] public string Id { get; set; }

        [DataMember] public string FirstName { get; set; }

        [DataMember] public string LastName { get; set; }

        [DataMember] public string Username { get; set; }

        [DataMember] public string Password { get; set; }
    }
}