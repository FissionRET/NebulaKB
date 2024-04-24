using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NebulaKB.Server.Migrations
{
    /// <inheritdoc />
    public partial class NebulaKB1 : Migration
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
                    table.PrimaryKey("PK__Categori__3214EC07FFFB9D73", x => x.Id);
                    table.ForeignKey(
                        name: "FK__Categorie__SubOf__2B0A656D",
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
                    Des = table.Column<string>(type: "text", nullable: true),
                    Price = table.Column<double>(type: "float", nullable: true),
                    Stock = table.Column<int>(type: "int", nullable: true),
                    Data = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Products__3214EC07DEC27877", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Username = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Status = table.Column<int>(type: "int", nullable: true),
                    role = table.Column<int>(type: "int", nullable: true, defaultValue: 3)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__User__3214EC077C134E6A", x => x.Id);
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
                        name: "FK__Product_c__Categ__29221CFB",
                        column: x => x.Categories,
                        principalTable: "Categories",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Product_c__Produ__2A164134",
                        column: x => x.Products,
                        principalTable: "Products",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    DoB = table.Column<DateOnly>(type: "date", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    Rank = table.Column<int>(type: "int", nullable: true),
                    Point = table.Column<double>(type: "float", nullable: true),
                    User = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Customer__3214EC07914D34D1", x => x.Id);
                    table.ForeignKey(
                        name: "FK__Customers__User__2645B050",
                        column: x => x.User,
                        principalTable: "User",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    DoB = table.Column<DateOnly>(type: "date", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: false),
                    OptIn = table.Column<DateOnly>(type: "date", nullable: true),
                    OptOut = table.Column<DateOnly>(type: "date", nullable: true),
                    User = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Employee__3214EC07EB8375C8", x => x.Id);
                    table.ForeignKey(
                        name: "FK__Employee__User__25518C17",
                        column: x => x.User,
                        principalTable: "User",
                        principalColumn: "Id");
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
                        name: "FK__Cart__Customer__2739D489",
                        column: x => x.Customer,
                        principalTable: "Customers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Cart__Products__282DF8C2",
                        column: x => x.Products,
                        principalTable: "Products",
                        principalColumn: "Id");
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
                    Breakdown = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Orders__3214EC0796F39D5B", x => x.Id);
                    table.ForeignKey(
                        name: "FK__Orders__Customer__2BFE89A6",
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
                        name: "FK__OderDetai__Produ__2DE6D218",
                        column: x => x.Product,
                        principalTable: "Products",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__OderDetail__Oder__2CF2ADDF",
                        column: x => x.Oder,
                        principalTable: "Orders",
                        principalColumn: "Id");
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
                name: "UQ__Customer__BD20C6F1C81C634B",
                table: "Customers",
                column: "User",
                unique: true,
                filter: "[User] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "UQ__Employee__BD20C6F1A8FAAAC8",
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
                name: "UQ__User__536C85E433C0D29B",
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
