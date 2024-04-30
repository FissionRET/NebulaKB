using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NebulaKB.Server.Migrations
{
    /// <inheritdoc />
    public partial class ChangeTypes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    SubOf = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Categori__3214EC079FDC098A", x => x.Id);
                    table.ForeignKey(
                        name: "FK__Categorie__SubOf__4EDDB18F",
                        column: x => x.SubOf,
                        principalTable: "Categories",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Des = table.Column<string>(type: "ntext", nullable: true),
                    Price = table.Column<double>(type: "float", nullable: true),
                    Stock = table.Column<int>(type: "int", nullable: true),
                    Data = table.Column<string>(type: "ntext", nullable: true),
                    Images = table.Column<string>(type: "ntext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Products__3214EC078CB13366", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Username = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Status = table.Column<int>(type: "int", nullable: true, defaultValue: 0),
                    Role = table.Column<int>(type: "int", nullable: true, defaultValue: 3)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__User__3214EC07402B94DD", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Product_category",
                columns: table => new
                {
                    Categories = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Products = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK__Product_c__Categ__4CF5691D",
                        column: x => x.Categories,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK__Product_c__Produ__4DE98D56",
                        column: x => x.Products,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Gender = table.Column<int>(type: "int", nullable: false),
                    DoB = table.Column<DateOnly>(type: "date", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Address = table.Column<string>(type: "ntext", nullable: false),
                    Rank = table.Column<int>(type: "int", nullable: true),
                    Point = table.Column<double>(type: "float", nullable: true),
                    User = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Customer__3214EC073F71CA40", x => x.Id);
                    table.ForeignKey(
                        name: "FK__Customers__User__4A18FC72",
                        column: x => x.User,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Gender = table.Column<int>(type: "int", nullable: false),
                    DoB = table.Column<DateOnly>(type: "date", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Address = table.Column<string>(type: "ntext", nullable: false),
                    OptIn = table.Column<DateOnly>(type: "date", nullable: true),
                    OptOut = table.Column<DateOnly>(type: "date", nullable: true),
                    User = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Employee__3214EC0709D67726", x => x.Id);
                    table.ForeignKey(
                        name: "FK__Employee__User__4924D839",
                        column: x => x.User,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "Cart",
                columns: table => new
                {
                    Customer = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Products = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK__Cart__Customer__4B0D20AB",
                        column: x => x.Customer,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK__Cart__Products__4C0144E4",
                        column: x => x.Products,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Customer = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Status = table.Column<int>(type: "int", nullable: true),
                    Additional_fee = table.Column<double>(type: "float", nullable: true),
                    Total = table.Column<double>(type: "float", nullable: true),
                    Breakdown = table.Column<string>(type: "ntext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Orders__3214EC073070C9EC", x => x.Id);
                    table.ForeignKey(
                        name: "FK__Orders__Customer__4FD1D5C8",
                        column: x => x.Customer,
                        principalTable: "Customers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "OderDetails",
                columns: table => new
                {
                    Oder = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Product = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK__OderDetai__Produ__51BA1E3A",
                        column: x => x.Product,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK__OderDetail__Oder__50C5FA01",
                        column: x => x.Oder,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cart_Customer",
                table: "Cart",
                column: "Customer");

            migrationBuilder.CreateIndex(
                name: "IX_Cart_Products",
                table: "Cart",
                column: "Products");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_SubOf",
                table: "Categories",
                column: "SubOf");

            migrationBuilder.CreateIndex(
                name: "UQ__Customer__BD20C6F1C798F498",
                table: "Customers",
                column: "User",
                unique: true,
                filter: "[User] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "UQ__Employee__BD20C6F153E9EFF6",
                table: "Employee",
                column: "User",
                unique: true,
                filter: "[User] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_OderDetails_Oder",
                table: "OderDetails",
                column: "Oder");

            migrationBuilder.CreateIndex(
                name: "IX_OderDetails_Product",
                table: "OderDetails",
                column: "Product");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_Customer",
                table: "Orders",
                column: "Customer");

            migrationBuilder.CreateIndex(
                name: "IX_Product_category_Categories",
                table: "Product_category",
                column: "Categories");

            migrationBuilder.CreateIndex(
                name: "IX_Product_category_Products",
                table: "Product_category",
                column: "Products");

            migrationBuilder.CreateIndex(
                name: "UQ__User__536C85E4BB203206",
                table: "User",
                column: "Username",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cart");

            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.DropTable(
                name: "OderDetails");

            migrationBuilder.DropTable(
                name: "Product_category");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
