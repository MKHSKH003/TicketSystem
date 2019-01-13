using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TicketSystemApi.Entities
{
    public partial class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options){}

        public virtual DbSet<Userlist> Userlist { get; set; }
        public virtual DbSet<Booking> Booking { get; set; }
        public virtual DbSet<Movies> Movies { get; set; }
        public virtual DbSet<Messages> Messages { get; set; }

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

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.ToTable("booking", "targeton_TicketSystem");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Cell)
                    .HasColumnName("cell")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Date)
                    .IsRequired()
                    .HasColumnName("date")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Film)
                    .IsRequired()
                    .HasColumnName("film")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasColumnName("location")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentDate)
                    .IsRequired()
                    .HasColumnName("paymentDate")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.People)
                    .HasColumnName("people")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasColumnName("image")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Cost)
                    .HasColumnName("cost")
                    .HasColumnType("int(11)");
            });

            modelBuilder.Entity<Movies>(entity =>
            {
                entity.ToTable("movies", "targeton_TicketSystem");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasColumnName("image")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasColumnType("int(11)");
            });


            modelBuilder.Entity<Messages>(entity =>
            {
                entity.ToTable("messages", "targeton_TicketSystem");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Date)
                    .IsRequired()
                    .HasColumnName("date")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Message)
                    .IsRequired()
                    .HasColumnName("message")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });
        }
    }
}
