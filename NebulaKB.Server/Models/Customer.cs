namespace NebulaKB.Server.Models;

public partial class Customer
{
    public string Id { get; set; } = null!;

    public string FullName { get; set; } = null!;

    public DateTime? DoB { get; set; }

    public string? Address { get; set; }

    public int? Rank { get; set; }

    public double? Point { get; set; }

    public string? User { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual User? UserNavigation { get; set; }
}
