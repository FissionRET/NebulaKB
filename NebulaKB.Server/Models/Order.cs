using System.Text.Json.Serialization;
using NTJson = Newtonsoft.Json;

namespace NebulaKB.Server.Models;

public class Order
{
    public string Id { get; set; } = null!;

    public string Customer { get; set; } = null!;

    public string Address { get; set; } = null!;

    public int? Status { get; set; }

    public double? AdditionalFee { get; set; }

    public double? Total { get; set; }

    public string? Breakdown { get; set; }

    [JsonIgnore] [NTJson.JsonIgnore] public virtual Customer CustomerNavigation { get; set; } = null!;
}