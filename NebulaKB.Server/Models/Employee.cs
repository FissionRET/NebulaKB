namespace NebulaKB.Server.Models;

public partial class Employee
{
    public string Id { get; set; } = null!;

    public string? FullName { get; set; }

    public DateOnly? DoB { get; set; }

    public string Address { get; set; } = null!;

    public DateOnly? OptIn { get; set; }

    public DateOnly? OptOut { get; set; }

    public string? User { get; set; }

    public virtual User? UserNavigation { get; set; }
}
