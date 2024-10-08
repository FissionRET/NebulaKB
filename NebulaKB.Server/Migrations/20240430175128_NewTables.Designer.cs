﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NebulaKB.Server.Models;

#nullable disable

namespace NebulaKB.Server.Migrations
{
    [DbContext(typeof(NebulaKBContext))]
    [Migration("20240430175128_NewTables")]
    partial class NewTables
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("NebulaKB.Server.Models.Cart", b =>
                {
                    b.Property<string>("Customer")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Product")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int?>("Quantity")
                        .HasColumnType("int");

                    b.HasIndex(new[] { "Customer" }, "IX_Cart_Customer");

                    b.HasIndex(new[] { "Product" }, "IX_Cart_Product");

                    b.ToTable("Cart", (string)null);
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Category", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Name")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("Id")
                        .HasName("PK__Categori__3214EC07FBA51219");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Customer", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateOnly>("DoB")
                        .HasColumnType("date");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int>("Gender")
                        .HasColumnType("int");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<double?>("Point")
                        .HasColumnType("float");

                    b.Property<int?>("Rank")
                        .HasColumnType("int");

                    b.Property<string>("User")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("Id")
                        .HasName("PK__Customer__3214EC076CED2530");

                    b.HasIndex(new[] { "Email" }, "UQ__Customer__A9D105345B9E7398")
                        .IsUnique();

                    b.HasIndex(new[] { "User" }, "UQ__Customer__BD20C6F1E836F38D")
                        .IsUnique()
                        .HasFilter("[User] IS NOT NULL");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Employee", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateOnly>("DoB")
                        .HasColumnType("date");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int>("Gender")
                        .HasColumnType("int");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateOnly?>("OptIn")
                        .HasColumnType("date");

                    b.Property<DateOnly?>("OptOut")
                        .HasColumnType("date");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("User")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("Id")
                        .HasName("PK__Employee__3214EC0788FEB16E");

                    b.HasIndex(new[] { "Email" }, "UQ__Employee__A9D10534B987733A")
                        .IsUnique();

                    b.HasIndex(new[] { "User" }, "UQ__Employee__BD20C6F1A0B07AA5")
                        .IsUnique()
                        .HasFilter("[User] IS NOT NULL");

                    b.ToTable("Employee", (string)null);
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Order", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<double?>("AdditionalFee")
                        .HasColumnType("float")
                        .HasColumnName("Additional_fee");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Breakdown")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Customer")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int?>("Status")
                        .HasColumnType("int");

                    b.Property<double?>("Total")
                        .HasColumnType("float");

                    b.HasKey("Id")
                        .HasName("PK__Orders__3214EC0791CF69AF");

                    b.HasIndex("Customer");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.OrderDetail", b =>
                {
                    b.Property<string>("OrderId")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("OrderID");

                    b.Property<string>("Product")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int?>("Quantity")
                        .HasColumnType("int");

                    b.HasIndex(new[] { "OrderId" }, "IX_OrderDetails_Order");

                    b.HasIndex(new[] { "Product" }, "IX_OrderDetails_Product");

                    b.ToTable("OrderDetails");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Product", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Category")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Data")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Des")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Images")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<double?>("Price")
                        .HasColumnType("float");

                    b.Property<int?>("Stock")
                        .HasColumnType("int");

                    b.HasKey("Id")
                        .HasName("PK__Products__3214EC0726D76773");

                    b.HasIndex("Category");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.ProductTag", b =>
                {
                    b.Property<string>("Product")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Tag")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasIndex(new[] { "Product" }, "IX_ProductTags_Product");

                    b.HasIndex(new[] { "Tag" }, "IX_ProductTags_Tag");

                    b.ToTable("ProductTags");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Tag", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Name")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("Id")
                        .HasName("PK__Tags__3214EC07C7C6AD6A");

                    b.HasIndex("Category");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int?>("Role")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(3);

                    b.Property<int?>("Status")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(0);

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("Id")
                        .HasName("PK__User__3214EC07DBD6AB7B");

                    b.HasIndex(new[] { "Username" }, "UQ__User__536C85E4C9480ADF")
                        .IsUnique();

                    b.ToTable("User", (string)null);
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Cart", b =>
                {
                    b.HasOne("NebulaKB.Server.Models.Customer", "CustomerNavigation")
                        .WithMany()
                        .HasForeignKey("Customer")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("FK__Cart__Customer__69279377");

                    b.HasOne("NebulaKB.Server.Models.Product", "ProductNavigation")
                        .WithMany()
                        .HasForeignKey("Product")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("FK__Cart__Product__6A1BB7B0");

                    b.Navigation("CustomerNavigation");

                    b.Navigation("ProductNavigation");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Customer", b =>
                {
                    b.HasOne("NebulaKB.Server.Models.User", "UserNavigation")
                        .WithOne("Customer")
                        .HasForeignKey("NebulaKB.Server.Models.Customer", "User")
                        .OnDelete(DeleteBehavior.SetNull)
                        .HasConstraintName("FK__Customers__User__68336F3E");

                    b.Navigation("UserNavigation");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Employee", b =>
                {
                    b.HasOne("NebulaKB.Server.Models.User", "UserNavigation")
                        .WithOne("Employee")
                        .HasForeignKey("NebulaKB.Server.Models.Employee", "User")
                        .OnDelete(DeleteBehavior.SetNull)
                        .HasConstraintName("FK__Employee__User__673F4B05");

                    b.Navigation("UserNavigation");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Order", b =>
                {
                    b.HasOne("NebulaKB.Server.Models.Customer", "CustomerNavigation")
                        .WithMany("Orders")
                        .HasForeignKey("Customer")
                        .IsRequired()
                        .HasConstraintName("FK__Orders__Customer__6DEC4894");

                    b.Navigation("CustomerNavigation");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.OrderDetail", b =>
                {
                    b.HasOne("NebulaKB.Server.Models.Order", "Order")
                        .WithMany()
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("FK__OrderDeta__Order__6EE06CCD");

                    b.HasOne("NebulaKB.Server.Models.Product", "ProductNavigation")
                        .WithMany()
                        .HasForeignKey("Product")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("FK__OrderDeta__Produ__6FD49106");

                    b.Navigation("Order");

                    b.Navigation("ProductNavigation");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Product", b =>
                {
                    b.HasOne("NebulaKB.Server.Models.Category", "CategoryNavigation")
                        .WithMany("Products")
                        .HasForeignKey("Category")
                        .OnDelete(DeleteBehavior.Cascade)
                        .HasConstraintName("FK__Products__Catego__6B0FDBE9");

                    b.Navigation("CategoryNavigation");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.ProductTag", b =>
                {
                    b.HasOne("NebulaKB.Server.Models.Product", "ProductNavigation")
                        .WithMany()
                        .HasForeignKey("Product")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("FK__ProductTa__Produ__6C040022");

                    b.HasOne("NebulaKB.Server.Models.Tag", "TagNavigation")
                        .WithMany()
                        .HasForeignKey("Tag")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("FK__ProductTags__Tag__6CF8245B");

                    b.Navigation("ProductNavigation");

                    b.Navigation("TagNavigation");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Tag", b =>
                {
                    b.HasOne("NebulaKB.Server.Models.Category", "CategoryNavigation")
                        .WithMany("Tags")
                        .HasForeignKey("Category")
                        .IsRequired()
                        .HasConstraintName("FK__Tags__Category__70C8B53F");

                    b.Navigation("CategoryNavigation");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Category", b =>
                {
                    b.Navigation("Products");

                    b.Navigation("Tags");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.Customer", b =>
                {
                    b.Navigation("Orders");
                });

            modelBuilder.Entity("NebulaKB.Server.Models.User", b =>
                {
                    b.Navigation("Customer");

                    b.Navigation("Employee");
                });
#pragma warning restore 612, 618
        }
    }
}
