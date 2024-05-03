using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NebulaKB.Server.DTO.Users;
using NebulaKB.Server.Helpers;
using NebulaKB.Server.Models;
using Newtonsoft.Json;
using System.Security.Claims;

namespace NebulaKB.Server.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController(NebulaKBContext context, JwtServices jwtServices) : Controller
    {
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

            var isExist = context.Users.FirstOrDefault(u => u.Username == dto.Username && u.Password == dto.Password);

            if (isExist == null)
            {
                return BadRequest(new
                {
                    message = "Username or password doesn\'t match data in database"
                });
            }

            var token = jwtServices.Generate(isExist);
            return Ok(new
            {
                isExist.Id,
                isExist.Username,
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

            if (context.Users.Any(u => u.Username == dto.user.Username))
            {
                return BadRequest(new
                {
                    message = "Username already exists"
                });
            }

            var newUser = new User
            {
                Id = Guid.NewGuid().ToString(),
                Username = dto.user.Username,
                Password = dto.user.Password
            };

            var newCustomer = new Customer
            {
                Id = Guid.NewGuid().ToString(),

                // Customer info
                FirstName = dto.customer.FirstName,
                LastName = dto.customer.LastName,
                Gender = dto.customer.Gender,
                DoB = DateOnly.FromDateTime(dto.customer.DoB).AddDays(1),
                Phone = dto.customer.Phone,
                Email = dto.customer.Email,

                // Address info
                Address = JsonConvert.SerializeObject(dto.customer.Address),

                // User info
                Rank = 0,
                Point = 0,
                User = newUser.Id
            };

            context.Users.Add(newUser);
            await context.SaveChangesAsync();

            context.Customers.Add(newCustomer);
            await context.SaveChangesAsync();

            var token = jwtServices.Generate(newUser);
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
            var userInfo = context.Users.SingleOrDefault(u => u.Username == username);
            var customerInfo = context.Customers.SingleOrDefault(u => u.User == userInfo!.Id);

            if (userInfo == null)
            {
                return NotFound(new
                {
                    message = "Không tìm thấy người dùng"
                });
            }

            if (customerInfo == null)
            {
                return NotFound(new
                {
                    message = "Không tìm thấy khách hàng"
                });
            }

            var userData = new
            {
                userInfo = new
                {
                    userInfo.Id,
                    userInfo.Username,
                    userInfo.Status,
                    userInfo.Role,
                },
                customerInfo = new
                {
                    customerInfo.Id,
                    customerInfo.FirstName,
                    customerInfo.LastName,
                    customerInfo.Gender,
                    customerInfo.DoB,
                    customerInfo.Phone,
                    customerInfo.Email,
                    Address = JsonConvert.DeserializeObject<AddressDTO>(customerInfo.Address),
                    customerInfo.Rank,
                    customerInfo.Point,
                    customerInfo.User
                }
            };

            return Ok(new
            {
                userData
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

            var user = context.Users.Find(dto.UserId);

            if (user == null)
            {
                return NotFound(new { message = "User not found" });
            }

            context.Users.Remove(user);
            await context.SaveChangesAsync();

            return Ok(new { message = "User deleted successfully" });
        }
    }
}
