using NebulaKB.Server.Models;

namespace NebulaKB.Server.Data.Users
{
    public class UserRepository : IUserRepository
    {
        private readonly UserContext _context;

        public UserRepository(UserContext context)
        {
            _context = context;
        }

        public User Create(User user)
        {
            _context.Users.Add(user);
            user.Id = _context.SaveChanges();

            return user;
        }

        public User Update(User user)
        {
            var existingUser = _context.Users.FirstOrDefault(x => x.Id == user.Id);

            if (existingUser != null)
            {
                _context.Entry(existingUser).CurrentValues.SetValues(user);
                _context.SaveChanges();
            }

            return existingUser;
        }

        public User Delete(User user)
        {
            var existingUser = _context.Users.Find(user.Id);

            if (existingUser != null)
            {
                _context.Users.Remove(existingUser);
                _context.SaveChanges();
            }

            return existingUser;
        }

        public User GetByUsername(string username)
        {
            return _context.Users.FirstOrDefault(u => u.Username == username);
        }


        public User GetById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }
    }
}
