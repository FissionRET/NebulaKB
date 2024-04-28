namespace NebulaKB.Server.DTO.Users
{
    public class DeleteDTO
    {
        public required string UserId { get; set; }

        public int Role { get; set; }
    }
}
