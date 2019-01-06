using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TicketSystemApi.targeton_TicketSystem
{
    public partial class targeton_TicketSystemContext : DbContext
    {
        public targeton_TicketSystemContext()
        {
        }

        public targeton_TicketSystemContext(DbContextOptions<targeton_TicketSystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Userlist> Userlist { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=41.185.8.134;userid=targeton_root;password=WebDev@2017;database=targeton_TicketSystem;SSL Mode=None;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<Userlist>(entity =>
            {
                entity.ToTable("userlist", "targeton_TicketSystem");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });
        }
    }
}
