using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NebulaKB.Server.DTO.Users;
using NebulaKB.Server.Models;

namespace NebulaKB.Server.Controllers;

[Route("permission")]
[ApiController]
public class RoleController(NebulaKBContext context) : Controller
{
    private readonly NebulaKBContext _context = context;

    [HttpPost("check-permission")]
    [Authorize]
    public IActionResult CheckPermission(RoleDTO dto)
    {
        var user = context.Users.Find(dto.UserId);

        if (user == null)
        {
            return NotFound(new { message = "User not found" });
        }

        return Ok(new
        {
            user.Role,
            message = "Found user permissions"
        });
    }
}