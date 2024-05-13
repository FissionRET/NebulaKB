using System.Text.Json.Serialization;
using NTJson = Newtonsoft.Json;

namespace NebulaKB.Server.Models;

public class ProductTag
{
    public string Product { get; set; } = null!;

    public string Tag { get; set; } = null!;

    [JsonIgnore] [NTJson.JsonIgnore] public virtual Product ProductNavigation { get; set; } = null!;

    [JsonIgnore] [NTJson.JsonIgnore] public virtual Tag TagNavigation { get; set; } = null!;
}