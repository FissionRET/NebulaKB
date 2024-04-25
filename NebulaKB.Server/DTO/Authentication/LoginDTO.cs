using System.Text.Json.Serialization;

namespace NebulaKB.Server.DTO.Authentication
{
    public class LoginDTO
    {
        public required string Username { get; set; }

        public required string Password { get; set; }

        [JsonIgnore]
        public int Role { get; set; }

        [JsonIgnore]
        public int Status { get; set; }
    }
}
