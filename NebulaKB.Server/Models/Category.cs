using System;
using System.Collections.Generic;

namespace NebulaKB.Server.Models;

public partial class Category
{
    public string Id { get; set; } = null!;

    public string? Name { get; set; }

    public string? SubOf { get; set; }

    public virtual ICollection<Category> InverseSubOfNavigation { get; set; } = new List<Category>();

    public virtual Category? SubOfNavigation { get; set; }
}
