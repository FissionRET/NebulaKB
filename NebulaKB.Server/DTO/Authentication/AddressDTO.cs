public class AddressDTO
{
    public string Street { get; set; } = null!;
    public string Wards { get; set; } = null!;
    public string District { get; set; } = null!;
    public string Province { get; set; } = null!;
    public string? FormattedAddress { get; set; }
}