using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NebulaKB.Server.DTO.Authentication;
using NebulaKB.Server.DTO.Users;
using NebulaKB.Server.Helpers;
using NebulaKB.Server.Models;
using Newtonsoft.Json;
using System.Security.Claims;
using System.Text;

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
        public IActionResult Login(LoginDTO dto) // using Task<> for asynchronous operation
        {
            // Reading request body async

            if (dto == null)
            {
                return BadRequest(new
                {
                    message = "Empty request body" // Handle empty request body
                });
            }

            if (string.IsNullOrEmpty(dto.Username) || string.IsNullOrEmpty(dto.Password))
            {
                return BadRequest(new { message = "Invalid user data" });
            }

            var isExist = _context.Users.FirstOrDefault(u => u.Username == dto.Username && u.Password == dto.Password);

            if (isExist == null)
            {
                return BadRequest(new
                {
                    message = "Username or password doesn\'t match data in database"
                });
            }

            var token = _jwtServices.Generate(isExist);
            return Ok(new
            {
                isExist.Id,
                isExist.Username,
                isExist.Role,
                token
            });
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterDTO dto)
        {

            if (dto == null)
            {
                return BadRequest(new
                {
                    message = "Empty request body" // Handle empty request body
                });
            }

            if (_context.Users.Any(u => u.Username == dto.Username))
            {
                return BadRequest(new
                {
                    message = "Username already exists"
                });
            }

            var newUser = new User
            {
                Id = Guid.NewGuid().ToString(),
                Username = dto.Username,
                Password = dto.Password,
                Role = 0,
                Status = 0
            };

            var newCustomer = new Customer
            {
                Id = Guid.NewGuid().ToString(),
                FullName = dto.FullName,
                DoB = dto.DateOfBirth,
                Address = dto.Address,
                Rank = 0,
                Point = 0,
                User = newUser.Id
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            _context.Customers.Add(newCustomer);
            await _context.SaveChangesAsync();

            var token = _jwtServices.Generate(newUser);
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

        [Authorize]
        [HttpDelete("user")]
        public async Task<IActionResult> Delete(DeleteDTO dto)
        {
            if (dto == null)
            {
                return BadRequest(new
                {
                    message = "Empty request body" // Handle empty request body
                });
            }

            if (dto.Role != 3 && dto.Role != 2)
            {
                return BadRequest(new { message = "You're not either Admin or Employee" });
            }

            if (string.IsNullOrEmpty(dto.UserId))
            {
                return BadRequest(new { message = "Invalid user id" });
            }

            var user = _context.Users.Find(dto.UserId);

            if (user == null)
            {
                return NotFound(new { message = "User not found" });
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User deleted successfully" });
        }
    }
}
