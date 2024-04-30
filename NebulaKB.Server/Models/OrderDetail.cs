using System.Text.Json.Serialization;
using NTJson = Newtonsoft.Json;

namespace NebulaKB.Server.Models;

public partial class OrderDetail
{
    public string OrderId { get; set; } = null!;

    public string Product { get; set; } = null!;

    public int? Quantity { get; set; }

    [JsonIgnore]
    [NTJson.JsonIgnore]
    public virtual Order Order { get; set; } = null!;

    [JsonIgnore]
    [NTJson.JsonIgnore]
    public virtual Product ProductNavigation { get; set; } = null!;
}
