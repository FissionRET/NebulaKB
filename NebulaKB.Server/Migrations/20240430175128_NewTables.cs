using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NebulaKB.Server.Migrations
{
    /// <inheritdoc />
    public partial class NewTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK__Cart__Customer__4B0D20AB",
                table: "Cart");

            migrationBuilder.DropForeignKey(
                name: "FK__Cart__Products__4C0144E4",
                table: "Cart");

            migrationBuilder.DropForeignKey(
                name: "FK__Categorie__SubOf__4EDDB18F",
                table: "Categories");

            migrationBuilder.DropForeignKey(
                name: "FK__Customers__User__4A18FC72",
                table: "Customers");

            migrationBuilder.DropForeignKey(
                name: "FK__Employee__User__4924D839",
                table: "Employee");

            migrationBuilder.DropForeignKey(
                name: "FK__Orders__Customer__4FD1D5C8",
                table: "Orders");

            migrationBuilder.DropTable(
                name: "OderDetails");

            migrationBuilder.DropTable(
                name: "Product_category");

            migrationBuilder.DropPrimaryKey(
                name: "PK__User__3214EC07402B94DD",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Products__3214EC078CB13366",
                table: "Products");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Orders__3214EC073070C9EC",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Employee__3214EC0709D67726",
                table: "Employee");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Customer__3214EC073F71CA40",
                table: "Customers");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Categori__3214EC079FDC098A",
                table: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Categories_SubOf",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "SubOf",
                table: "Categories");

            migrationBuilder.RenameIndex(
                name: "UQ__User__536C85E4BB203206",
                table: "User",
                newName: "UQ__User__536C85E4C9480ADF");

            migrationBuilder.RenameIndex(
                name: "UQ__Employee__BD20C6F153E9EFF6",
                table: "Employee",
                newName: "UQ__Employee__BD20C6F1A0B07AA5");

            migrationBuilder.RenameIndex(
                name: "UQ__Customer__BD20C6F1C798F498",
                table: "Customers",
                newName: "UQ__Customer__BD20C6F1E836F38D");

            migrationBuilder.RenameColumn(
                name: "Products",
                table: "Cart",
                newName: "Product");

            migrationBuilder.RenameIndex(
                name: "IX_Cart_Products",
                table: "Cart",
                newName: "IX_Cart_Product");

            migrationBuilder.AlterColumn<string>(
                name: "Images",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "ntext",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Des",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "ntext",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Data",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "ntext",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Products",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Breakdown",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "ntext",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "ntext");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Customers",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "Customers",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "ntext");

            migrationBuilder.AddPrimaryKey(
                name: "PK__User__3214EC07DBD6AB7B",
                table: "User",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK__Products__3214EC0726D76773",
                table: "Products",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK__Orders__3214EC0791CF69AF",
                table: "Orders",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK__Employee__3214EC0788FEB16E",
                table: "Employee",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK__Customer__3214EC076CED2530",
                table: "Customers",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK__Categori__3214EC07FBA51219",
                table: "Categories",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "OrderDetails",
                columns: table => new
                {
                    OrderID = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Product = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK__OrderDeta__Order__6EE06CCD",
                        column: x => x.OrderID,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK__OrderDeta__Produ__6FD49106",
                        column: x => x.Product,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Tags",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Category = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Tags__3214EC07C7C6AD6A", x => x.Id);
                    table.ForeignKey(
                        name: "FK__Tags__Category__70C8B53F",
                        column: x => x.Category,
                        principalTable: "Categories",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ProductTags",
                columns: table => new
                {
                    Product = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Tag = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK__ProductTa__Produ__6C040022",
                        column: x => x.Product,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK__ProductTags__Tag__6CF8245B",
                        column: x => x.Tag,
                        principalTable: "Tags",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_Category",
                table: "Products",
                column: "Category");

            migrationBuilder.CreateIndex(
                name: "UQ__Employee__A9D10534B987733A",
                table: "Employee",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ__Customer__A9D105345B9E7398",
                table: "Customers",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_Order",
                table: "OrderDetails",
                column: "OrderID");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_Product",
                table: "OrderDetails",
                column: "Product");

            migrationBuilder.CreateIndex(
                name: "IX_ProductTags_Product",
                table: "ProductTags",
                column: "Product");

            migrationBuilder.CreateIndex(
                name: "IX_ProductTags_Tag",
                table: "ProductTags",
                column: "Tag");

            migrationBuilder.CreateIndex(
                name: "IX_Tags_Category",
                table: "Tags",
                column: "Category");

            migrationBuilder.AddForeignKey(
                name: "FK__Cart__Customer__69279377",
                table: "Cart",
                column: "Customer",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK__Cart__Product__6A1BB7B0",
                table: "Cart",
                column: "Product",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK__Customers__User__68336F3E",
                table: "Customers",
                column: "User",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK__Employee__User__673F4B05",
                table: "Employee",
                column: "User",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK__Orders__Customer__6DEC4894",
                table: "Orders",
                column: "Customer",
                principalTable: "Customers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK__Products__Catego__6B0FDBE9",
                table: "Products",
                column: "Category",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK__Cart__Customer__69279377",
                table: "Cart");

            migrationBuilder.DropForeignKey(
                name: "FK__Cart__Product__6A1BB7B0",
                table: "Cart");

            migrationBuilder.DropForeignKey(
                name: "FK__Customers__User__68336F3E",
                table: "Customers");

            migrationBuilder.DropForeignKey(
                name: "FK__Employee__User__673F4B05",
                table: "Employee");

            migrationBuilder.DropForeignKey(
                name: "FK__Orders__Customer__6DEC4894",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK__Products__Catego__6B0FDBE9",
                table: "Products");

            migrationBuilder.DropTable(
                name: "OrderDetails");

            migrationBuilder.DropTable(
                name: "ProductTags");

            migrationBuilder.DropTable(
                name: "Tags");

            migrationBuilder.DropPrimaryKey(
                name: "PK__User__3214EC07DBD6AB7B",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Products__3214EC0726D76773",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_Category",
                table: "Products");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Orders__3214EC0791CF69AF",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Employee__3214EC0788FEB16E",
                table: "Employee");

            migrationBuilder.DropIndex(
                name: "UQ__Employee__A9D10534B987733A",
                table: "Employee");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Customer__3214EC076CED2530",
                table: "Customers");

            migrationBuilder.DropIndex(
                name: "UQ__Customer__A9D105345B9E7398",
                table: "Customers");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Categori__3214EC07FBA51219",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Products");

            migrationBuilder.RenameIndex(
                name: "UQ__User__536C85E4C9480ADF",
                table: "User",
                newName: "UQ__User__536C85E4BB203206");

            migrationBuilder.RenameIndex(
                name: "UQ__Employee__BD20C6F1A0B07AA5",
                table: "Employee",
                newName: "UQ__Employee__BD20C6F153E9EFF6");

            migrationBuilder.RenameIndex(
                name: "UQ__Customer__BD20C6F1E836F38D",
                table: "Customers",
                newName: "UQ__Customer__BD20C6F1C798F498");

            migrationBuilder.RenameColumn(
                name: "Product",
                table: "Cart",
                newName: "Products");

            migrationBuilder.RenameIndex(
                name: "IX_Cart_Product",
                table: "Cart",
                newName: "IX_Cart_Products");

            migrationBuilder.AlterColumn<string>(
                name: "Images",
                table: "Products",
                type: "ntext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Des",
                table: "Products",
                type: "ntext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Data",
                table: "Products",
                type: "ntext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Breakdown",
                table: "Orders",
                type: "ntext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "Employee",
                type: "ntext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Customers",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255);

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "Customers",
                type: "ntext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "SubOf",
                table: "Categories",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK__User__3214EC07402B94DD",
                table: "User",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK__Products__3214EC078CB13366",
                table: "Products",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK__Orders__3214EC073070C9EC",
                table: "Orders",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK__Employee__3214EC0709D67726",
                table: "Employee",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK__Customer__3214EC073F71CA40",
                table: "Customers",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK__Categori__3214EC079FDC098A",
                table: "Categories",
                column: "Id");

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

            migrationBuilder.CreateIndex(
                name: "IX_Categories_SubOf",
                table: "Categories",
                column: "SubOf");

            migrationBuilder.CreateIndex(
                name: "IX_OderDetails_Oder",
                table: "OderDetails",
                column: "Oder");

            migrationBuilder.CreateIndex(
                name: "IX_OderDetails_Product",
                table: "OderDetails",
                column: "Product");

            migrationBuilder.CreateIndex(
                name: "IX_Product_category_Categories",
                table: "Product_category",
                column: "Categories");

            migrationBuilder.CreateIndex(
                name: "IX_Product_category_Products",
                table: "Product_category",
                column: "Products");

            migrationBuilder.AddForeignKey(
                name: "FK__Cart__Customer__4B0D20AB",
                table: "Cart",
                column: "Customer",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK__Cart__Products__4C0144E4",
                table: "Cart",
                column: "Products",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK__Categorie__SubOf__4EDDB18F",
                table: "Categories",
                column: "SubOf",
                principalTable: "Categories",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK__Customers__User__4A18FC72",
                table: "Customers",
                column: "User",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK__Employee__User__4924D839",
                table: "Employee",
                column: "User",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK__Orders__Customer__4FD1D5C8",
                table: "Orders",
                column: "Customer",
                principalTable: "Customers",
                principalColumn: "Id");
        }
    }
}
