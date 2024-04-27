public class AddressDTO
{
    public string Street { get; set; } = null!;
    public string City { get; set; } = null!;
    public string Province { get; set; } = null!;
    public string Country { get; set; } = null!;
    public string? FormattedAddress { get; set; }
}