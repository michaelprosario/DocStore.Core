using DocStore.Core.Entities;
using Microsoft.Extensions.Options;

namespace DocStore.Server
{
    public class AppSettingsLoader
    {
        private readonly AppSettings settings;

        public AppSettingsLoader(IOptions<AppSettings> settings)
        {
            if (settings is null)
            {
                throw new System.ArgumentNullException(nameof(settings));
            }

            this.settings = settings.Value;
        }

        public AppSettings GetSettings()
        {
            return settings;
        }
    }
}