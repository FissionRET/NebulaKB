namespace NebulaKB.Server.DTO.Authentication
{
    public class RegisterDTO
    {
        // Step 1

        public required string Username { get; set; }
        public required string Password { get; set; }
        public required string RepeatPassword { get; set; }

        // Step 2

        public string FullName { get; set; } = null!;        
        public DateTime DateOfBirth { get; set; }
        public string Address { get; set; } = null!;
    }
}
