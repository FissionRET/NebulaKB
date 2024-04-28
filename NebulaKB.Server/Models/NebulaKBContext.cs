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

    public virtual DbSet<OderDetail> OderDetails { get; set; }

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
                .HasConstraintName("FK__Cart__Customer__4B0D20AB");

            entity.HasOne(d => d.ProductsNavigation).WithMany()
                .HasForeignKey(d => d.Products)
                .HasConstraintName("FK__Cart__Products__4C0144E4");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Categori__3214EC079FDC098A");

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
            entity.Property(e => e.SubOf).HasMaxLength(255);

            entity.HasOne(d => d.SubOfNavigation).WithMany(p => p.InverseSubOfNavigation)
                .HasForeignKey(d => d.SubOf)
                .HasConstraintName("FK__Categorie__SubOf__4EDDB18F");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Customer__3214EC073F71CA40");

            entity.HasIndex(e => e.User, "UQ__Customer__BD20C6F1C798F498").IsUnique();

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Address).HasColumnType("text");
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.FirstName).HasMaxLength(255);
            entity.Property(e => e.LastName).HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(255);
            entity.Property(e => e.User).HasMaxLength(255);

            entity.HasOne(d => d.UserNavigation).WithOne(p => p.Customer)
                .HasForeignKey<Customer>(d => d.User)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK__Customers__User__4A18FC72");
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Employee__3214EC0709D67726");

            entity.ToTable("Employee");

            entity.HasIndex(e => e.User, "UQ__Employee__BD20C6F153E9EFF6").IsUnique();

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Address).HasColumnType("text");
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.FirstName).HasMaxLength(255);
            entity.Property(e => e.LastName).HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(255);
            entity.Property(e => e.User).HasMaxLength(255);

            entity.HasOne(d => d.UserNavigation).WithOne(p => p.Employee)
                .HasForeignKey<Employee>(d => d.User)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK__Employee__User__4924D839");
        });

        modelBuilder.Entity<OderDetail>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.Oder).HasMaxLength(255);
            entity.Property(e => e.Product).HasMaxLength(255);

            entity.HasOne(d => d.OderNavigation).WithMany()
                .HasForeignKey(d => d.Oder)
                .HasConstraintName("FK__OderDetail__Oder__50C5FA01");

            entity.HasOne(d => d.ProductNavigation).WithMany()
                .HasForeignKey(d => d.Product)
                .HasConstraintName("FK__OderDetai__Produ__51BA1E3A");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Orders__3214EC073070C9EC");

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.AdditionalFee).HasColumnName("Additional_fee");
            entity.Property(e => e.Address).HasMaxLength(255);
            entity.Property(e => e.Breakdown).HasColumnType("text");
            entity.Property(e => e.Customer).HasMaxLength(255);

            entity.HasOne(d => d.CustomerNavigation).WithMany(p => p.Orders)
                .HasForeignKey(d => d.Customer)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Orders__Customer__4FD1D5C8");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Products__3214EC078CB13366");

            entity.Property(e => e.Id).HasMaxLength(255);
            entity.Property(e => e.Data).HasColumnType("text");
            entity.Property(e => e.Des).HasColumnType("text");
            entity.Property(e => e.Images).HasColumnType("text");
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
                .HasConstraintName("FK__Product_c__Categ__4CF5691D");

            entity.HasOne(d => d.ProductsNavigation).WithMany()
                .HasForeignKey(d => d.Products)
                .HasConstraintName("FK__Product_c__Produ__4DE98D56");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User__3214EC07402B94DD");

            entity.ToTable("User");

            entity.HasIndex(e => e.Username, "UQ__User__536C85E4BB203206").IsUnique();

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
