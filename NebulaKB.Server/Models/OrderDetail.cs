namespace NebulaKB.Server.Models;

public partial class OrderDetail
{
    public string Order { get; set; } = null!;

    public string Product { get; set; } = null!;

    public virtual Order OderNavigation { get; set; } = null!;

    public virtual Product ProductNavigation { get; set; } = null!;
}
