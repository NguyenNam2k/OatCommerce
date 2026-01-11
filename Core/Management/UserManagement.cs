using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Management
{
    public class UserManagement
    {
        private static UserManagement instance;
        private static readonly object instanceLock = new object();
        private UserManagement() { }
        public static UserManagement Instance
        {
            get
            {
                lock (instanceLock)
                {
                    if (instance == null)
                    {
                        instance = new UserManagement();
                    }
                    return instance;
                }

            }
        }
        public User GetUserByUserId(int id)
        {
            User user = null;
            try
            {
                var managerDB = new Management_System_ProjectContext();
                user = managerDB.Users.SingleOrDefault(u => u.UserId == id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return user;
        }
        public User GetUserByUserName(string userName)
        {
            User user = null;
            try
            {
                var managerDB = new Management_System_ProjectContext();
                user = managerDB.Users.SingleOrDefault(u => u.UserName.ToLower() == userName.ToLower());
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return user;
        }
        public void AddUser(User user)
        {
            if (user != null)
            {
                try
                {

                    var managerDB = new Management_System_ProjectContext();
                    managerDB.Users.Add(user);
                    managerDB.SaveChanges();

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.InnerException.Message);

                    throw new Exception(ex.Message);

                }
            }
        }
        public void UpdateUser(User user)
        {
            try
            {
                User _user = GetUserByUserId(user.UserId);
                if (_user != null)
                {
                    var managerDB = new Management_System_ProjectContext();
                    managerDB.Entry<User>(user).State = EntityState.Modified;
                    managerDB.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public void DeleteUser(User user)
        {
            try
            {
                User _user = GetUserByUserId(user.UserId);
                if (_user != null)
                {
                    var managerDB = new Management_System_ProjectContext();
                    managerDB.Users.Remove(_user);
                    managerDB.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public List<User> GetUserList()
        {
            List<User> users;
            try
            {
                var managerDB = new Management_System_ProjectContext();
                users = managerDB.Users.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);

            }
            return users;
        }

    }
}
