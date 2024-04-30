using System.Text.Json.Serialization;
using NTJson = Newtonsoft.Json;

namespace NebulaKB.Server.Models;

public partial class User
{
    public string Id { get; set; } = null!;

    public string Username { get; set; } = null!;

    [JsonIgnore]
    [NTJson.JsonIgnore]
    public string Password { get; set; } = null!;

    public int? Status { get; set; }

    public int? Role { get; set; }

    [JsonIgnore]
    [NTJson.JsonIgnore]
    public virtual Customer? Customer { get; set; }

    [JsonIgnore]
    [NTJson.JsonIgnore]
    public virtual Employee? Employee { get; set; }
}
