namespace NebulaKB.Server.Models;

public partial class Cart
{
    public string Customer { get; set; } = null!;

    public string Products { get; set; } = null!;

    public int? Quantity { get; set; }

    public virtual Customer CustomerNavigation { get; set; } = null!;

    public virtual Product ProductsNavigation { get; set; } = null!;
}
