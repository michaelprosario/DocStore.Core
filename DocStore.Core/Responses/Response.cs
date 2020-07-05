using System.Collections.Generic;
using System.Runtime.Serialization;
using DocStore.Core.Enums;
using FluentValidation.Results;

namespace DocStore.Core.Responses
{
    [DataContract]
    public class Response
    {
        public Response()
        {
            this.Code = ResponseCode.Success;
            this.Message = "";
        }

        [DataMember] public ResponseCode Code { get; set; }

        [DataMember] public string Message { get; set; }

        [DataMember] public IList<ValidationFailure> ValidationErrors { get; set; }
    }
}