using NebulaKB.Server.Models;

namespace NebulaKB.Server.Data.Users
{
    public interface IUserRepository
    {
        // Common actions

        User Create(User user);
        User Update(User user);
        User Delete(User user);

        // Others

        User GetByUsername(string username);
        User GetById(int id);
    }
}
