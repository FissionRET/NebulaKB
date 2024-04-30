using System.Text.Json.Serialization;
using NTJson = Newtonsoft.Json;

namespace NebulaKB.Server.Models;

public partial class Tag
{
    public string Id { get; set; } = null!;

    public string? Name { get; set; }

    public string Category { get; set; } = null!;

    [JsonIgnore]
    [NTJson.JsonIgnore]
    public virtual Category CategoryNavigation { get; set; } = null!;
}
