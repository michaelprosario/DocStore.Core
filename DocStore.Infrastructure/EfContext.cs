using DocStore.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace DocStore.Infrastructure
{
    public class EfContext : DbContext
    {
        public EfContext(DbContextOptions<EfContext> options)
            : base(options)
        {
        }

        public DbSet<Doc> Documents { get; set; }
        public DbSet<User> Users { get; set; }
    }
}