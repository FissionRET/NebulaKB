using System.ComponentModel.DataAnnotations;

public class LoginDTO
{
    public string Username { get; set; } = null!;
    public string Password { get; set; } = null!;
}