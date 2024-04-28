namespace NebulaKB.Server.Models;

public partial class Employee
{
    public string Id { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public int Gender { get; set; }

    public DateOnly DoB { get; set; }

    public string Phone { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Address { get; set; } = null!;

    public DateOnly? OptIn { get; set; }

    public DateOnly? OptOut { get; set; }

    public string? User { get; set; }

    public virtual User? UserNavigation { get; set; }
}
