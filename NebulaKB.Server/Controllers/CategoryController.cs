using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NebulaKB.Server.DTO.Product;
using NebulaKB.Server.Helpers;
using NebulaKB.Server.Models;

namespace NebulaKB.Server.Controllers;

public class CategoryController(NebulaKBContext context, JwtServices jwtServices) : Controller
{
    // GET: /category/getAll
    [HttpGet("getAll")]
    [Authorize]
    public IActionResult GetCategories()
    {
        var categories = context.Categories.ToList();
        return Ok(categories);
    }

    // GET: /category/getById/{id}
    [HttpGet("getById/{id}")]
    [Authorize]
    public IActionResult GetCategoryById(string id)
    {
        var category = context.Categories.FirstOrDefaultAsync(c => c.Id == id);

        if (category == null)
            return NotFound(new
            {
                message = "Category not found"
            });

        return Ok(category);
    }

    // POST: /category/create
    [HttpPost("create")]
    [Authorize]
    public async Task<IActionResult> CreateCategory([FromBody] CategoryDTO dto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var newCategory = new Category
        {
            Id = Guid.NewGuid().ToString(),
            Name = dto.Name
        };

        await context.Categories.AddAsync(newCategory);
        await context.SaveChangesAsync();

        return Ok(new
        {
            message = "success"
        });
    }

    // POST: /category/update/{id}
    [HttpPost("update/{id}")]
    [Authorize]
    public async Task<IActionResult> UpdateCategory(string id, [FromBody] CategoryDTO updatedCategory)
    {
        var category = await context.Categories.FirstOrDefaultAsync(c => c.Id == id);

        if (category == null)
            return NotFound(new
            {
                message = "Category not found"
            });

        category.Name = updatedCategory.Name;

        await context.SaveChangesAsync();
        return Ok(category);
    }

    // DELETE: /category/delete/{id}
    [HttpDelete("delete/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteCategory(string id)
    {
        var category = await context.Categories.FirstOrDefaultAsync(c => c.Id == id);

        if (category == null)
            return NotFound(new
            {
                message = "Category not found"
            });

        context.Categories.Remove(category);
        await context.SaveChangesAsync();

        return Ok(new
        {
            message = "success"
        });
    }
}