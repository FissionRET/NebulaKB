using System.Text.Json.Serialization;
using NTJson = Newtonsoft.Json;

namespace NebulaKB.Server.Models;

public partial class Customer
{
    public string Id { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public int Gender { get; set; }

    public DateOnly DoB { get; set; }

    public string Phone { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Address { get; set; } = null!;

    public int? Rank { get; set; }

    public double? Point { get; set; }

    public string? User { get; set; }

    [JsonIgnore]
    [NTJson.JsonIgnore]
    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    [JsonIgnore]
    [NTJson.JsonIgnore]
    public virtual User? UserNavigation { get; set; }
}
