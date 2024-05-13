using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NebulaKB.Server.DTO.Users;
using NebulaKB.Server.Models;

namespace NebulaKB.Server.Controllers;

[Route("permission")]
[ApiController]
public class RoleController(NebulaKBContext context) : Controller
{
    // POST: /permission/check/{id}
    [HttpPost("check/{id}")]
    [Authorize]
    public IActionResult CheckPermission(string id)
    {
        var user = context.Users.Find(id);

        if (user == null) return NotFound(new { message = "User not found" });

        return Ok(new
        {
            user.Role,
            message = "Found user permissions"
        });
    }
}