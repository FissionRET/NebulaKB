using Microsoft.EntityFrameworkCore;

namespace NebulaKB.Server.Models;

public partial class NebulaKBContext : DbContext
{
    public NebulaKBContext() { }

    public NebulaKBContext(DbContextOptions<NebulaKBContext> options)
        : base(options) { }

    public virtual DbSet<Cart> Carts { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderDetail> OrderDetails { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<ProductTag> ProductTags { get; set; }

    public virtual DbSet<Tag> Tags { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cart>(entity =>
        {
            entity.HasNoKey().ToTable("Cart");

            entity.HasIndex(e => e.Customer, "IX_Cart_Customer");

            entity.HasIndex(e => e.Product, "IX_Cart_Product");

            entity.Property(e => e.Customer).HasMaxLength(255);
            entity.Property(e => e.Product).HasMaxLength(255);

            entity
                .HasOne(d => d.CustomerNavigation)
                .WithMany()
                .HasForeignKey(d => d.Customer)
                .HasConstraintName("FK__Cart__Customer__69279377");

            entity
                .HasOne(d => d.ProductNavigation)
                .WithMany()
                .HasForeignKey(d => d.Product)
                .HasConstraintName("FK__Cart__Product__6A1BB7B0");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Categori__3214EC07FBA51219");

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Customer__3214EC076CED2530");

            entity.HasIndex(e => e.Email, "UQ__Customer__A9D105345B9E7398").IsUnique();

            entity.HasIndex(e => e.User, "UQ__Customer__BD20C6F1E836F38D").IsUnique();

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.FirstName).HasMaxLength(255);
            entity.Property(e => e.LastName).HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(255);
            entity.Property(e => e.User).HasMaxLength(255);

            entity
                .HasOne(d => d.UserNavigation)
                .WithOne(p => p.Customer)
                .HasForeignKey<Customer>(d => d.User)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK__Customers__User__68336F3E");
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Employee__3214EC0788FEB16E");

            entity.ToTable("Employee");

            entity.HasIndex(e => e.Email, "UQ__Employee__A9D10534B987733A").IsUnique();

            entity.HasIndex(e => e.User, "UQ__Employee__BD20C6F1A0B07AA5").IsUnique();

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.FirstName).HasMaxLength(255);
            entity.Property(e => e.LastName).HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(255);
            entity.Property(e => e.User).HasMaxLength(255);

            entity
                .HasOne(d => d.UserNavigation)
                .WithOne(p => p.Employee)
                .HasForeignKey<Employee>(d => d.User)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK__Employee__User__673F4B05");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Orders__3214EC0791CF69AF");

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.AdditionalFee).HasColumnName("Additional_fee");
            entity.Property(e => e.Address).HasMaxLength(255);
            entity.Property(e => e.Customer).HasMaxLength(255);

            entity
                .HasOne(d => d.CustomerNavigation)
                .WithMany(p => p.Orders)
                .HasForeignKey(d => d.Customer)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Orders__Customer__6DEC4894");
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.HasNoKey();

            entity.HasIndex(e => e.OrderId, "IX_OrderDetails_Order");

            entity.HasIndex(e => e.Product, "IX_OrderDetails_Product");

            entity.Property(e => e.OrderId).HasMaxLength(255).HasColumnName("OrderID");
            entity.Property(e => e.Product).HasMaxLength(255);

            entity
                .HasOne(d => d.Order)
                .WithMany()
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("FK__OrderDeta__Order__6EE06CCD");

            entity
                .HasOne(d => d.ProductNavigation)
                .WithMany()
                .HasForeignKey(d => d.Product)
                .HasConstraintName("FK__OrderDeta__Produ__6FD49106");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Products__3214EC0726D76773");

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Category).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);

            entity
                .HasOne(d => d.CategoryNavigation)
                .WithMany(p => p.Products)
                .HasForeignKey(d => d.Category)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__Products__Catego__6B0FDBE9");
        });

        modelBuilder.Entity<ProductTag>(entity =>
        {
            entity.HasNoKey();

            entity.HasIndex(e => e.Product, "IX_ProductTags_Product");

            entity.HasIndex(e => e.Tag, "IX_ProductTags_Tag");

            entity.Property(e => e.Product).HasMaxLength(255);
            entity.Property(e => e.Tag).HasMaxLength(255);

            entity
                .HasOne(d => d.ProductNavigation)
                .WithMany()
                .HasForeignKey(d => d.Product)
                .HasConstraintName("FK__ProductTa__Produ__6C040022");

            entity
                .HasOne(d => d.TagNavigation)
                .WithMany()
                .HasForeignKey(d => d.Tag)
                .HasConstraintName("FK__ProductTags__Tag__6CF8245B");
        });

        modelBuilder.Entity<Tag>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Tags__3214EC07C7C6AD6A");

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Category).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);

            entity
                .HasOne(d => d.CategoryNavigation)
                .WithMany(p => p.Tags)
                .HasForeignKey(d => d.Category)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Tags__Category__70C8B53F");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User__3214EC07DBD6AB7B");

            entity.ToTable("User");

            entity.HasIndex(e => e.Username, "UQ__User__536C85E4C9480ADF").IsUnique();

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Password).HasMaxLength(255);
            entity.Property(e => e.Role).HasDefaultValue(3);
            entity.Property(e => e.Status).HasDefaultValue(0);
            entity.Property(e => e.Username).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
