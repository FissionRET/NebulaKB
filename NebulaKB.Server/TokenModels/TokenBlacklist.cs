namespace NebulaKB.Server.TokenModels
{
    public class TokenBlacklist
    {
        public int Id { get; set; }
        public string? Token { get; set; }
        public DateTime ExpireAt { get; set; }
    }
}
