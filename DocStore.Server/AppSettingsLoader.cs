using Microsoft.Extensions.Options;

namespace DocStore.Server
{
    public class AppSettingsLoader
    {
        private readonly AppSettings settings;

        public AppSettingsLoader(IOptions<AppSettings> settings)
        {
            this.settings = settings.Value;
        }

        public AppSettings GetSettings()
        {
            return settings;
        }
    }
}