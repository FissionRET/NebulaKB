using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NebulaKB.Server.Migrations
{
    /// <inheritdoc />
    public partial class NebulaKB2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Oder",
                table: "OderDetails",
                newName: "Order");

            migrationBuilder.RenameIndex(
                name: "IX_OderDetails_Oder",
                table: "OderDetails",
                newName: "IX_OderDetails_Order");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Order",
                table: "OderDetails",
                newName: "Oder");

            migrationBuilder.RenameIndex(
                name: "IX_OderDetails_Order",
                table: "OderDetails",
                newName: "IX_OderDetails_Oder");
        }
    }
}
