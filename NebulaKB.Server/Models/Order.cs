using System;
using System.Collections.Generic;

namespace NebulaKB.Server.Models;

public partial class Order
{
    public string Id { get; set; } = null!;

    public string Customer { get; set; } = null!;

    public string Address { get; set; } = null!;

    public int? Status { get; set; }

    public double? AdditionalFee { get; set; }

    public double? Total { get; set; }

    public string? Breakdown { get; set; }

    public virtual Customer CustomerNavigation { get; set; } = null!;
}
