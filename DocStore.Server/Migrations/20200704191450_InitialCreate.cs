using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DocStore.Server.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                "Documents",
                table => new
                {
                    Id = table.Column<string>(),
                    CollectionName = table.Column<string>(nullable: true),
                    CreatedAt = table.Column<DateTime>(),
                    CreatedBy = table.Column<string>(nullable: true),
                    DeletedAt = table.Column<DateTime>(nullable: true),
                    DeletedBy = table.Column<string>(nullable: true),
                    IsDeleted = table.Column<bool>(),
                    JsonData = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    UpdatedAt = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true)
                },
                constraints: table => { table.PrimaryKey("PK_Documents", x => x.Id); });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                "Documents");
        }
    }
}