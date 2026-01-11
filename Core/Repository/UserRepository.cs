using Core.IRepository;
using Core.Management;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Repository
{
    public class UserRepository : IUserRepository
    {
        public User GetUserById(int userId) => UserManagement.Instance.GetUserByUserId(userId);

        public User GetUserByName(string userName) => UserManagement.Instance.GetUserByUserName(userName);

        public void InsertUser(User user) => UserManagement.Instance.AddUser(user);

        public void UpdateUser(User user) => UserManagement.Instance.UpdateUser(user);

        public void DeleteUser(User user) => UserManagement.Instance.DeleteUser(user);

        public List<User> GetUsers() => UserManagement.Instance.GetUserList();

    }
}
