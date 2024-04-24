using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NebulaKB.Server.Helpers;
using NebulaKB.Server.Models;
using NebulaKB.Server.TokenModels;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace NebulaKB.Server.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly NebulaKBContext _context;
        private readonly JwtServices _jwtServices;

        public AuthController(NebulaKBContext context, JwtServices jwtServices)
        {
            _context = context;
            _jwtServices = jwtServices;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public IActionResult Login(User user)
        {
            var existingUser = _context.Users.SingleOrDefault(u => u.Username == user.Username && u.Password == user.Password);
            if (existingUser == null)
            {
                return BadRequest(new
                {
                    message = "Username or password doesn\'t match data in database"
                });
            }

            var token = _jwtServices.Generate(existingUser);
            return Ok(new { token });
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public IActionResult Register(User user)
        {
            if (_context.Users.Any(u => u.Username == user.Username))
            {
                return BadRequest(new
                {
                    message = "Username already exists"
                });
            }

            user.Id = Guid.NewGuid().ToString();
            _context.Users.Add(user);
            _context.SaveChanges();

            var token = _jwtServices.Generate(user);
            return Ok(new { token });
        }

        [Authorize]
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            var token = HttpContext.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");

            if (string.IsNullOrEmpty(token))
            {
                return BadRequest(new
                {
                    message = "Invalid provided token"
                });
            }

            var tokenDescriptor = new JwtSecurityTokenHandler().ReadToken(token) as JwtSecurityToken;

            if (tokenDescriptor == null)
            {
                return BadRequest(new
                {
                    message = "Invalid token"
                });
            }

            var expireAt = DateTime.Parse(tokenDescriptor.Claims.First(claim => claim.Type == "exp").Value);

            _context.TokenBlacklists.Add(new TokenBlacklist
            {
                Token = token,
                ExpireAt = expireAt
            });

            _context.SaveChanges();

            return Ok(new
            {
                message = "Logout successful"
            });
        }

        [Authorize]
        [HttpGet("user")]
        public IActionResult UserInfo()
        {
            var username = User.FindFirst(ClaimTypes.Name)?.Value;
            var user = _context.Users.SingleOrDefault(u => u.Username == username);

            if (user == null)
            {
                return NotFound(new
                {
                    message = "User not found"
                });
            }

            return Ok(new
            {
                user.Id,
                user.Username,
                user.Status,
                user.Role
            });
        }
    }
}
