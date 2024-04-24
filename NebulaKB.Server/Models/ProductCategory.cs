namespace NebulaKB.Server.Models;

public partial class ProductCategory
{
    public string Categories { get; set; } = null!;

    public string Products { get; set; } = null!;

    public virtual Category CategoriesNavigation { get; set; } = null!;

    public virtual Product ProductsNavigation { get; set; } = null!;
}
