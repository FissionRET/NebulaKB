namespace NebulaKB.Server.DTO.Authentication;

public class CreateUserDTO
{
    public UserDTO User { get; set; } = null!;
    public CustomerDTO? Customer { get; set; }
    public EmployeeDTO? Employee { get; set; }
}