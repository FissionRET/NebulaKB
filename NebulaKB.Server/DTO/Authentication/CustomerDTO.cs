using NebulaKB.Server.Models;

public class CustomerDTO
{

    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public int Gender { get; set; }
    public DateOnly DoB { get; set; }
    public string Phone { get; set; } = null!;
    public string? Email { get; set; }
    public AddressDTO? Address { get; set; } = null!;

}