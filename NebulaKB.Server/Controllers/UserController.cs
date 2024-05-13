using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NebulaKB.Server.DTO.Authentication;
using NebulaKB.Server.Helpers;
using NebulaKB.Server.Models;
using Newtonsoft.Json;

namespace NebulaKB.Server.Controllers;

[Route("user")]
[ApiController]
public class UserController(NebulaKBContext context, JwtServices jwtServices) : Controller
{
    // GET: /user/getAll
    [HttpGet("getAll")]
    [Authorize]
    public IActionResult GetUsers()
    {
        var users = context.Users.ToList();
        return Ok(users);
    }
    
    // GET: /user/getById/{id}
    [HttpGet("getById/{id}")]
    [Authorize]
    public IActionResult GetUserById(string id)
    {
        var user = context.Users.FirstOrDefault(u => u.Id == id);
        if(user == null)
            return NotFound(new
            {
                message = "User not found"
            });

        return Ok(user);
    }
    
    // POST: /user/create
    [HttpPost("create")]
    [Authorize]
    public async Task<IActionResult> CreateUser([FromBody] CreateUserDTO dto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var newUser = new User
        {
            Id = Guid.NewGuid().ToString(),
            Username = dto.User.Username,
            Password = dto.User.Password,
            Status = 0,
            Role = 3
        };

        await context.Users.AddAsync(newUser);
        await context.SaveChangesAsync();
        
        return Ok(new
        {
            message = "success"
        });
    }
    
    // POST: /user/update/{id}
    [HttpPost("update/{id}")]
    [Authorize]
    public async Task<IActionResult> UpdateUser(string id, [FromBody] UserDTO updatedUser)
    {
        var user = await context.Users.FirstOrDefaultAsync(u => u.Id == id);
        
        if(user == null)
            return NotFound(new
            {
                message = "User not found"
            });

        user.Username = updatedUser.Username ?? user.Username;
        user.Password = updatedUser.Password ?? user.Password;
        user.Status = updatedUser.Status ?? user.Status;
        user.Role = updatedUser.Role ?? user.Role;

        await context.SaveChangesAsync();
        return Ok(user);
    }
    
    // DELETE: /user/delete/{id}
    [HttpDelete("delete/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteUser(string id)
    {
        var user = await context.Users.FirstOrDefaultAsync(u => u.Id == id);
        
        if (user == null)
            return NotFound(new
            {
                message = "User not found"
            });
        
        context.Users.Remove(user);
        await context.SaveChangesAsync();

        return Ok(new
        {
            message = "success"
        });
    }
}