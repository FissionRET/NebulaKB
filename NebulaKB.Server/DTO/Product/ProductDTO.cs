namespace NebulaKB.Server.DTO.Product;

public class ProductDTO
{
    public string Name { get; set; }
    public string Des { get; set; }
    public int? Price { get; set; }
    public int Stock { get; set; }
    public string? Data { get; set; } = null!;
    public string Images { get; set; }
    public CategoryDTO? Category { get; set; } = null!;
}