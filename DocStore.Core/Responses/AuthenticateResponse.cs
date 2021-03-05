using System.Runtime.Serialization;

namespace DocStore.Core.Responses
{
  [DataContract]
  public class AuthenticateResponse : Response
  {

    [DataMember] public string UserId { get; set; }
    [DataMember] public string Username { get; set; }
    [DataMember] public string FirstName { get; set; }
    [DataMember] public string LastName { get; set; }
    [DataMember] public string Token { get; set; }
  }
}