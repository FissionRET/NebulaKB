using System.Text.Json.Serialization;
using NTJson = Newtonsoft.Json;

namespace NebulaKB.Server.Models;

public class Category
{
    public string Id { get; set; } = null!;

    public string? Name { get; set; }

    [JsonIgnore] [NTJson.JsonIgnore] public virtual ICollection<Product> Products { get; set; } = new List<Product>();

    [JsonIgnore] [NTJson.JsonIgnore] public virtual ICollection<Tag> Tags { get; set; } = new List<Tag>();
}