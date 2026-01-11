using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Globalization;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using Core.IRepository;
using Core.Models;
using Core.Repository;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using static System.Net.Mime.MediaTypeNames;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;

namespace PRN212_ProjectTeam1.ViewModel
{
    public class UserViewModel : BaseViewModel
    {
        public Management_System_ProjectContext context = new Management_System_ProjectContext();
        IUserRepository userRepository;
        public ICommand AddCommand { get; set; }
        public ICommand UpdateCommand { get; set; }
        public ICommand DeleteCommand { get; set; }

        private ObservableCollection<string> _comboItems;
        public ObservableCollection<string> ComboItems
        {
            get { return _comboItems; }
            set
            {
                _comboItems = value;
                OnPropertyChanged("ComboItems");
            }
        }

        private IEnumerable<User> users;
        public IEnumerable<User> Users { get { return users; } set { users = value; OnPropertyChanged(); } }

        private User user;
        public User User
        {
            get => user; set
            {
                user = value; OnPropertyChanged();
                if (user != null)
                {
                    UserName = user.UserName;
                    Dob = DateOnly.ParseExact(user.Dob.ToString("MM-dd-yyyy"), "MM-dd-yyyy", CultureInfo.InvariantCulture);
                    Gender = user.Gender;
                    UserRole = user.UserRole;
                }
            }
        }

        private string userName;
        public string UserName { get => userName; set { userName = value; OnPropertyChanged(); } }

        private DateOnly dob;
        public DateOnly Dob { get => dob; set { dob = value; OnPropertyChanged(); } }

        private bool gender;
        public bool Gender { get => gender; set { gender = value; OnPropertyChanged(); } }

        private int userRole;
        public int UserRole { get => userRole; set { userRole = value; OnPropertyChanged(); } }

        public UserViewModel()
        {
            userRepository = new UserRepository();
            Users = userRepository.GetUsers();
            dob = DateOnly.FromDateTime(DateTime.Now);
            AddCommand = new ReplayCommand<object>((p) => { return true; }, (p) =>
            {
                if (UserName == null || Dob == null || Gender == null || UserRole == null)
                {
                    MessageBox.Show("Property is empty");
                }
                else
                {
                    var user = new User()
                    {
                        UserName = UserName,
                        Gender = Gender,
                        Dob = Dob,
                        UserRole = UserRole,
                    };

                    if (MessageBox.Show("Do you want insert Account?", "Insert", MessageBoxButton.YesNo) == MessageBoxResult.Yes)
                    {
                        try
                        {
                            userRepository.InsertUser(user);
                            Users = userRepository.GetUsers();
                            context.SaveChanges();
                        }
                        catch (Exception ex)
                        {
                            MessageBox.Show(ex.Message);
                        }
                    }
                }

            });
            UpdateCommand = new ReplayCommand<object>(
                (p) =>
                {

                    if (user == null)
                    {
                        return false;
                    }
                    var displayProduct = userRepository.GetUserById(User.UserId);
                    if (displayProduct == null)
                    {
                        return false;
                    }
                    return true;
                },
                (p) =>
                {
                    if (UserName == null || Dob == null || Gender == null || UserRole == null)
                    {
                        MessageBox.Show("Property is empty");
                    }
                    else
                    {
                        var update = userRepository.GetUserById(User.UserId);

                        update.UserName = UserName;
                        update.Gender = Gender;
                        update.Dob = Dob;
                        update.UserRole = UserRole;
                        if (MessageBox.Show("Do you want update account?", "Update", MessageBoxButton.YesNo) == MessageBoxResult.Yes)
                        {
                            userRepository.UpdateUser(update);
                            Users = userRepository.GetUsers();
                            context.SaveChanges();
                        }
                    }
                });
            DeleteCommand = new ReplayCommand<object>(
                (p) =>
                {

                    if (user == null)
                    {
                        return false;
                    }
                    var displayProduct = userRepository.GetUserById(User.UserId);
                    if (displayProduct == null)
                    {
                        return false;
                    }
                    return true;
                },
            (p) =>
            {
                    var delete = userRepository.GetUserById(User.UserId);
                    if (MessageBox.Show("Do you want delete account?", "Delete", MessageBoxButton.YesNo) == MessageBoxResult.Yes)
                    {
                        userRepository.DeleteUser(delete);
                        Users = userRepository.GetUsers();
                        context.SaveChanges();
                    }
                });
        }
    }
}
