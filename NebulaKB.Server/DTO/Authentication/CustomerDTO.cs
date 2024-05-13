public class CustomerDTO
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public int Gender { get; set; }
    public DateTime DoB { get; set; }
    public string Phone { get; set; } = null!;
    public string? Email { get; set; }
    public AddressDTO? Address { get; set; } = null!;
    public int? Rank { get; set; }
    public int? Point { get; set; }
}