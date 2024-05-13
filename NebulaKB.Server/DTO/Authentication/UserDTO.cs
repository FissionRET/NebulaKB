namespace NebulaKB.Server.DTO.Authentication;

public class UserDTO
{
    public string? Username { get; set; } = null!;

    public string? Password { get; set; }

    public int? Status { get; set; }

    public int? Role { get; set; }
}