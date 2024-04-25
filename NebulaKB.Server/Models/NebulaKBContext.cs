using Microsoft.EntityFrameworkCore;

namespace NebulaKB.Server.Models;

public partial class NebulaKBContext : DbContext
{
    public NebulaKBContext()
    {
    }

    public NebulaKBContext(DbContextOptions<NebulaKBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cart> Carts { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<OrderDetail> OderDetails { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<ProductCategory> ProductCategories { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cart>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Cart");

            entity.Property(e => e.Customer).HasMaxLength(255);
            entity.Property(e => e.Products).HasMaxLength(255);

            entity.HasOne(d => d.CustomerNavigation).WithMany()
                .HasForeignKey(d => d.Customer)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Cart__Customer__2739D489");

            entity.HasOne(d => d.ProductsNavigation).WithMany()
                .HasForeignKey(d => d.Products)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Cart__Products__282DF8C2");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Categori__3214EC07FFFB9D73");

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
            entity.Property(e => e.SubOf).HasMaxLength(255);

            entity.HasOne(d => d.SubOfNavigation).WithMany(p => p.InverseSubOfNavigation)
                .HasForeignKey(d => d.SubOf)
                .HasConstraintName("FK__Categorie__SubOf__2B0A656D");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Customer__3214EC07914D34D1");

            entity.HasIndex(e => e.User, "UQ__Customer__BD20C6F1C81C634B").IsUnique();

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Address).HasColumnType("text");
            entity.Property(e => e.FullName).HasMaxLength(255);
            entity.Property(e => e.User).HasMaxLength(255);

            entity.HasOne(d => d.UserNavigation).WithOne(p => p.Customer)
                .HasForeignKey<Customer>(d => d.User)
                .HasConstraintName("FK__Customers__User__2645B050");
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Employee__3214EC07EB8375C8");

            entity.ToTable("Employee");

            entity.HasIndex(e => e.User, "UQ__Employee__BD20C6F1A8FAAAC8").IsUnique();

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Address).HasColumnType("text");
            entity.Property(e => e.FullName).HasMaxLength(255);
            entity.Property(e => e.User).HasMaxLength(255);

            entity.HasOne(d => d.UserNavigation).WithOne(p => p.Employee)
                .HasForeignKey<Employee>(d => d.User)
                .HasConstraintName("FK__Employee__User__25518C17");
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.Order).HasMaxLength(255);
            entity.Property(e => e.Product).HasMaxLength(255);

            entity.HasOne(d => d.OderNavigation).WithMany()
                .HasForeignKey(d => d.Order)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OderDetail__Oder__2CF2ADDF");

            entity.HasOne(d => d.ProductNavigation).WithMany()
                .HasForeignKey(d => d.Product)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OderDetai__Produ__2DE6D218");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Orders__3214EC0796F39D5B");

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.AdditionalFee).HasColumnName("Additional_fee");
            entity.Property(e => e.Address).HasMaxLength(255);
            entity.Property(e => e.Breakdown).HasColumnType("text");
            entity.Property(e => e.Customer).HasMaxLength(255);

            entity.HasOne(d => d.CustomerNavigation).WithMany(p => p.Orders)
                .HasForeignKey(d => d.Customer)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Orders__Customer__2BFE89A6");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Products__3214EC07DEC27877");

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Data).HasColumnType("text");
            entity.Property(e => e.Des).HasColumnType("text");
            entity.Property(e => e.Name).HasMaxLength(255);
        });

        modelBuilder.Entity<ProductCategory>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Product_category");

            entity.Property(e => e.Categories).HasMaxLength(255);
            entity.Property(e => e.Products).HasMaxLength(255);

            entity.HasOne(d => d.CategoriesNavigation).WithMany()
                .HasForeignKey(d => d.Categories)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product_c__Categ__29221CFB");

            entity.HasOne(d => d.ProductsNavigation).WithMany()
                .HasForeignKey(d => d.Products)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product_c__Produ__2A164134");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User__3214EC077C134E6A");

            entity.ToTable("User");

            entity.HasIndex(e => e.Username, "UQ__User__536C85E433C0D29B").IsUnique();

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Password).HasMaxLength(255);
            entity.Property(e => e.Role)
                .HasDefaultValue(3)
                .HasColumnName("role");
            entity.Property(e => e.Username).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
