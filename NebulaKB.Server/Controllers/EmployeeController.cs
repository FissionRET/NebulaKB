using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NebulaKB.Server.DTO.Authentication;
using NebulaKB.Server.Helpers;
using NebulaKB.Server.Models;
using Newtonsoft.Json;

namespace NebulaKB.Server.Controllers;

[Route("employee")]
[ApiController]
public class EmployeeController(NebulaKBContext context, JwtServices jwtServices) : Controller
{
    // GET: /employee/getAll
    [HttpGet("getAll")]
    [Authorize]
    public IActionResult GetEmployees()
    {
        var employees = context.Employees.ToList();
        return Ok(employees);
    }

    // GET: /employee/getById/{id}
    [HttpGet("getById/{id}")]
    [Authorize]
    public IActionResult GetEmployeeById(string id)
    {
        var employee = context.Employees.FirstOrDefault(e => e.Id == id);

        if (employee == null)
            return NotFound(new
            {
                message = "Customer not found"
            });

        return Ok(employee);
    }

    // POST: /employee/create
    [HttpPost("create")]
    [Authorize]
    public async Task<IActionResult> CreateEmployee([FromBody] CreateUserDTO dto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var newUser = new User
        {
            Id = Guid.NewGuid().ToString(),
            Username = dto.User.Username,
            Password = dto.User.Password,
            Status = 0,
            Role = 2
        };

        await context.Users.AddAsync(newUser);
        await context.SaveChangesAsync();

        Employee newEmployee = null;
        if (dto.Employee != null)
        {
            newEmployee = new Employee
            {
                Id = Guid.NewGuid().ToString(),
                FirstName = dto.Employee.FirstName,
                LastName = dto.Employee.LastName,
                Gender = dto.Employee.Gender,
                DoB = DateOnly.FromDateTime(dto.Employee.DoB).AddDays(1),
                Phone = dto.Employee.Phone,
                Email = dto.Employee.Email,
                Address = JsonConvert.SerializeObject(dto.Employee.Address),
                OptIn = DateOnly.FromDateTime(dto.Employee.OptIn).AddDays(1),
                OptOut = DateOnly.FromDateTime(dto.Employee.OptOut).AddDays(1),
                User = newUser.Id
            };

            await context.Employees.AddAsync(newEmployee);
            await context.SaveChangesAsync();
        }

        return Ok(new
        {
            message = "success"
        });
    }

    // POST: /employee/update/{id}
    [HttpPost("update/{id}")]
    [Authorize]
    public async Task<IActionResult> UpdateEmployee(string id, [FromBody] EmployeeDTO updatedEmployee)
    {
        var employee = await context.Employees.FirstOrDefaultAsync(e => e.Id == id);

        if (employee == null)
            return NotFound(new
            {
                message = "Employee not found"
            });

        employee.FirstName = updatedEmployee.FirstName ?? employee.FirstName;
        employee.LastName = updatedEmployee.LastName ?? employee.LastName;
        employee.Email = updatedEmployee.Email ?? employee.Email;
        employee.Gender = updatedEmployee.Gender;
        employee.DoB = DateOnly.FromDateTime(updatedEmployee.DoB).AddDays(1);
        employee.Phone = updatedEmployee.Phone ?? employee.Phone;
        employee.Address = JsonConvert.SerializeObject(updatedEmployee.Address);
        employee.OptIn = DateOnly.FromDateTime(updatedEmployee.OptIn).AddDays(1);
        employee.OptOut = DateOnly.FromDateTime(updatedEmployee.OptIn).AddDays(1);

        await context.SaveChangesAsync();
        return Ok(employee);
    }

    // DELETE: /customer/delete/{id}
    [HttpDelete("delete/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteEmployee(string id)
    {
        var employee = await context.Employees.FirstOrDefaultAsync(e => e.Id == id);

        if (employee == null)
            return NotFound(new
            {
                message = "Employee not found"
            });

        context.Employees.Remove(employee);
        await context.SaveChangesAsync();

        return Ok(new
        {
            message = "success"
        });
    }
}