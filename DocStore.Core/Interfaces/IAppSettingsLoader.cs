using DocStore.Core.Entities;

namespace DocStore.Core.Interfaces
{
    public interface IAppSettingsLoader
    {
        AppSettings GetSettings();
    }
}
