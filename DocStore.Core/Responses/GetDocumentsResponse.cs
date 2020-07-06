using System.Collections.Generic;
using System.Runtime.Serialization;
using DocStore.Core.Entities;

namespace DocStore.Core.Responses
{
    [DataContract]
    public class GetDocumentsResponse : Response
    {
        public IList<Doc> Documents { get; set; }
    }
}