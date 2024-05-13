using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NebulaKB.Server.DTO.Authentication;
using NebulaKB.Server.Helpers;
using NebulaKB.Server.Models;
using Newtonsoft.Json;

namespace NebulaKB.Server.Controllers;

[Route("customer")]
[ApiController]
public class CustomerController(NebulaKBContext context, JwtServices jwtServices) : Controller
{
    // GET: /customer/getAll
    [HttpGet("getAll")]
    [Authorize]
    public IActionResult GetCustomers()
    {
        var customers = context.Customers.ToList();
        return Ok(customers);
    }

    // GET: /customer/getById/{id}
    [HttpGet("getById/{id}")]
    [Authorize]
    public IActionResult GetCustomerById(string id)
    {
        var customer = context.Customers.FirstOrDefault(c => c.Id == id);
        if (customer == null)
            return NotFound(new
            {
                message = "Customer not found"
            });

        return Ok(customer);
    }

    // POST: /customer/create
    [HttpPost("create")]
    [Authorize]
    public async Task<IActionResult> CreateCustomer([FromBody] CreateUserDTO dto)
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

        Customer newCustomer = null;
        if (dto.Customer != null)
        {
            newCustomer = new Customer
            {
                Id = Guid.NewGuid().ToString(),
                FirstName = dto.Customer.FirstName,
                LastName = dto.Customer.LastName,
                Gender = dto.Customer.Gender,
                DoB = DateOnly.FromDateTime(dto.Customer.DoB).AddDays(1),
                Phone = dto.Customer.Phone,
                Email = dto.Customer.Email,
                Address = JsonConvert.SerializeObject(dto.Customer.Address),
                User = newUser.Id
            };

            await context.Customers.AddAsync(newCustomer);
            await context.SaveChangesAsync();
        }

        return Ok(new
        {
            message = "success"
        });
    }

    // POST: /customer/update/{id}
    [HttpPost("update/{id}")]
    [Authorize]
    public async Task<IActionResult> UpdateCustomer(string id, [FromBody] CustomerDTO updatedCustomer)
    {
        var customer = await context.Customers.FirstOrDefaultAsync(c => c.Id == id);

        if (customer == null)
            return NotFound(new
            {
                message = "Customer not found"
            });

        customer.FirstName = updatedCustomer.FirstName ?? customer.FirstName;
        customer.LastName = updatedCustomer.LastName ?? customer.LastName;
        customer.Email = updatedCustomer.Email ?? customer.Email;
        customer.Gender = updatedCustomer.Gender;
        customer.DoB = DateOnly.FromDateTime(updatedCustomer.DoB).AddDays(1);
        customer.Phone = updatedCustomer.Phone ?? customer.Phone;
        customer.Address = JsonConvert.SerializeObject(updatedCustomer.Address);
        customer.Rank = updatedCustomer.Rank ?? customer.Rank;
        customer.Point = updatedCustomer.Point ?? customer.Point;

        await context.SaveChangesAsync();
        return Ok(customer);
    }

    // DELETE: /customer/delete/{id}
    [HttpDelete("delete/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteCustomer(string id)
    {
        var customer = await context.Customers.FirstOrDefaultAsync(c => c.Id == id);

        if (customer == null)
            return NotFound(new
            {
                message = "Customer not found"
            });

        context.Customers.Remove(customer);
        await context.SaveChangesAsync();

        return Ok(new
        {
            message = "success"
        });
    }
}