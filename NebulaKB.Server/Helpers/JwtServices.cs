using Microsoft.IdentityModel.Tokens;
using NebulaKB.Server.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace NebulaKB.Server.Helpers
{
    public class JwtServices
    {
        private readonly IConfiguration? _configuration;

        public JwtServices(IConfiguration? configuration)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        public string Generate(User user)
        {
            if (_configuration == null)
            {
                throw new InvalidOperationException("Configuration is not set.");
            }
        
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]!);
        
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id),
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim(ClaimTypes.Role, user.Role.ToString()!)
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
        
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        
        #region Cookies Authorization
        // public string Generate(string userId, User userData)
        // {
        //     SymmetricSecurityKey symmetricSecurityKey =
        //         new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
        //     SigningCredentials credentials =
        //         new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
        //     JwtHeader header = new JwtHeader(credentials);
        //     JwtPayload payload =
        //         new JwtPayload(userId, null, null, null, DateTime.Today.AddDays(1)); // 1 days expiration
        //
        //     payload.Add("user", new Dictionary<string, object>
        //     {
        //         { "userId", userData.Id },
        //         { "username", userData.Username },
        //         { "role", userData.Role },
        //         { "status", userData.Status },
        //         { "customer", userData.Customer },
        //         { "employee", userData.Employee }
        //     });
        //
        //     JwtSecurityToken securityToken = new JwtSecurityToken(header, payload);
        //
        //     return new JwtSecurityTokenHandler().WriteToken(securityToken);
        // }
        //
        // public JwtSecurityToken Verify(string jwt)
        // {
        //     JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
        //     var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]!);
        //
        //     tokenHandler.ValidateToken(jwt, new TokenValidationParameters
        //     {
        //         IssuerSigningKey = new SymmetricSecurityKey(key),
        //         ValidateIssuerSigningKey = true,
        //         ValidateIssuer = false,
        //         ValidateAudience = false
        //     }, out SecurityToken validatedToken);
        //
        //     return (JwtSecurityToken)validatedToken;
        // }
        #endregion
    }
}