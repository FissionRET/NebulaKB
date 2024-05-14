using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NebulaKB.Server.DTO.Product;
using NebulaKB.Server.Helpers;
using NebulaKB.Server.Models;

namespace NebulaKB.Server.Controllers;

[Route("product")]
[ApiController]
public class ProductController(NebulaKBContext context, JwtServices jwtServices) : Controller
{
    // GET: /product/getAll
    [HttpGet("getAll")]
    [Authorize]
    public IActionResult GetProducts()
    {
        var products = context.Products.ToList();
        return Ok(products);
    }

    // GET: /product/getById/{id}
    [HttpGet("getById/{id}")]
    [Authorize]
    public IActionResult GetProductById(string id)
    {
        var product = context.Products.FirstOrDefault(p => p.Id == id);

        if (product == null)
            return NotFound(new
            {
                message = "Customer not found"
            });

        return Ok(product);
    }

    // POST: /product/create
    [HttpPost("create")]
    [Authorize]
    public async Task<IActionResult> CreateProduct([FromBody] ProductDTO dto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var newProduct = new Product
        {
            Id = Guid.NewGuid().ToString(),
            Name = dto.Name,
            Des = dto.Des,
            Price = dto.Price,
            Stock = dto.Stock,
            Data = dto.Data,
            Images = dto.Images,
            Category = dto.Category.Name
        };

        await context.Products.AddAsync(newProduct);
        await context.SaveChangesAsync();

        return Ok(new
        {
            message = "success"
        });
    }

    // POST: /product/update/{id}
    [HttpPost("update/{id}")]
    [Authorize]
    public async Task<IActionResult> UpdateProduct(string id, [FromBody] ProductDTO updatedProduct)
    {
        var product = await context.Products.FirstOrDefaultAsync(p => p.Id == id);

        if (product == null)
            return NotFound(new
            {
                message = "Product not found"
            });

        product.Name = updatedProduct.Name ?? product.Name;
        product.Des = updatedProduct.Des ?? product.Des;
        product.Price = updatedProduct.Price ?? product.Price;
        product.Stock = updatedProduct.Stock;
        product.Data = updatedProduct.Data ?? product.Data;
        product.Images = updatedProduct.Images ?? product.Images;
        product.Category = updatedProduct.Category.Name ?? product.Category;

        await context.SaveChangesAsync();
        return Ok(product);
    }

    // DELETE: /product/delete/{id}
    [HttpDelete("delete/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteProduct(string id)
    {
        var product = await context.Products.FirstOrDefaultAsync(p => p.Id == id);

        if (product == null)
            return NotFound(new
            {
                message = "Product not found"
            });

        context.Products.Remove(product);
        await context.SaveChangesAsync();

        return Ok(new
        {
            message = "success"
        });
    }
}