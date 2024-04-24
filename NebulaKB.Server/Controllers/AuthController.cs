using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NebulaKB.Server.Data.Users;
using NebulaKB.Server.DTOs;
using NebulaKB.Server.Helpers;
using NebulaKB.Server.Models;

namespace NebulaKB.Server.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        private readonly JwtServices _jwtServices;

        public AuthController(IUserRepository repository, JwtServices jwtServices)
        {
            _repository = repository;
            _jwtServices = jwtServices;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public IActionResult Login(LoginDTO dto)
        {
            var user = _repository.GetByUsername(dto.Username);

            if (user == null)
            {
                return BadRequest(new
                {
                    message = "Invalid credentials"
                });
            }

            if (dto.Password != user.Password)
            {
                return BadRequest(new
                {
                    message = "Invalid credentials"
                });
            }

            var jwt = _jwtServices.Generate(user.Id);

            return Ok(new
            {
                message = "success",
                username = dto.Username,
                token = jwt,
            });
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public IActionResult Register(RegisterDTO dto)
        {
            var user = new User
            {
                Username = dto.Username,
                Password = dto.Password, // BCrypt.Net.BCrypt.HashPassword(dto.Password) crypt later
            };

            return Created("success", _repository.Create(user));
        }

        [Authorize]
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            try
            {
                var jwt = HttpContext.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");
                var token = _jwtServices.Verify(jwt);
                int userId = int.Parse(token.Issuer);
                var user = _repository.GetById(userId);

                return Ok(new
                {
                    message = "success"
                });
            }
            catch
            {
                return Unauthorized();
            }
        }

        [Authorize]
        [HttpGet("user")]
        public IActionResult UserInfo()
        {
            try
            {
                var jwt = HttpContext.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");
                var token = _jwtServices.Verify(jwt);
                int userId = int.Parse(token.Issuer);
                var user = _repository.GetById(userId);

                return Ok(user);
            }
            catch
            {
                return Unauthorized();
            }
        }
    }
}
