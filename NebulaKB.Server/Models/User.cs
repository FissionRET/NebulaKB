using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace NebulaKB.Server.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }
        
        [JsonIgnore] 
        public string Password { get; set; }

        // Using json ignore will ignore the field when request Get
    }
}
