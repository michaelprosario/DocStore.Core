using System;

namespace DocStore.Core.Utilities
{
    public class Require
    {
        public static void ObjectNotNull(object currentObject, string message)
        {
            if (currentObject == null) throw new ArgumentNullException(message);
        }

        public static void NotNullOrEmpty(string input, string message)
        {
            if (string.IsNullOrEmpty(input)) throw new ArgumentException(message);
        }
    }
}