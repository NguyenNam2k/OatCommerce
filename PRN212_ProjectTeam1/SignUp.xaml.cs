using Core.Models;
using PRN212_ProjectTeam1;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;

namespace PRN212_ProjectTeam1
{
    /// <summary>
    /// Interaction logic for SignUp.xaml
    /// </summary>
    public partial class SignUp : Window
    {
        public SignUp()
        {
            InitializeComponent();
        }
        private void SignUp_Click(object sender, RoutedEventArgs e)
        {
            if (!string.IsNullOrEmpty(txtUsername.Text) && !string.IsNullOrEmpty(txtPassword.Password) && !string.IsNullOrEmpty(txtRePassword.Password))
            {
                try
                {
                    using (var db = new Management_System_ProjectContext())
                    {
                        var listAccounts = db.Users.Select(a => new
                        {
                            UserId = a.UserId,
                            UserName = a.UserName,
                            Password = a.Password,
                            UserRole = a.UserRole
                        }).ToList();
                        var newuser = listAccounts.FirstOrDefault(e => txtUsername.Text.Equals(e.UserName, StringComparison.OrdinalIgnoreCase));
                        if (newuser != null)
                        {
                            MessageBox.Show("Username is exist");
                        }
                        else
                        {
                            if (txtPassword.Equals(txtPassword))
                            {
                                try
                                {
                                    var userNew = new User
                                    {
                                        UserName = txtUsername.Text,
                                        Password = txtRePassword.Password.ToString(),
                                        UserRole = 2,
                                    };
                                    db.Users.Add(userNew);
                                    if (db.SaveChanges() > 0)
                                    {
                                        MessageBox.Show("SignUp success.");
                                        Login login = new Login();
                                        login.Show();
                                        this.Hide();
                                    }
                                }

                                catch (Exception ex)
                                {
                                    MessageBox.Show("SignUp error!");
                                }
                            }
                            else
                            {
                                MessageBox.Show("RePassword not correct!");
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("SignUp error!");
                }
            }
            else
            {
                MessageBox.Show("Please input all fields!");
            }
        }
        private void SignIn_Click(object sender, RoutedEventArgs e)
        {
            Login login = new Login();
            login.Show();
            this.Hide();
        }
        private void txtUsername_MouseDown(object sender, MouseButtonEventArgs e)
        {
            txtUsername.Focus();
        }

        private void txtUsername_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (!string.IsNullOrEmpty(txtUsername.Text) && textUsername.Text.Length > 0)
            {
                textUsername.Visibility = Visibility.Collapsed;
            }
            else
            {
                textUsername.Visibility = Visibility.Visible;
            }
        }

        private void textPassword_MouseDown(object sender, MouseButtonEventArgs e)
        {
            txtPassword.Focus();

        }

        private void txtPassword_PasswordChanged(object sender, RoutedEventArgs e)
        {
            if (!string.IsNullOrEmpty(txtPassword.Password) && txtPassword.Password.Length > 0)
            {
                textPassword.Visibility = Visibility.Collapsed;
            }
            else
            {
                textPassword.Visibility = Visibility.Visible;
            }
        }

        private void textRePassword_MouseDown(object sender, MouseButtonEventArgs e)
        {
            txtRePassword.Focus();
        }

        private void txtRePassword_PasswordChanged(object sender, RoutedEventArgs e)
        {
            if (!string.IsNullOrEmpty(txtRePassword.Password) && txtRePassword.Password.Length > 0)
            {
                textRePassword.Visibility = Visibility.Collapsed;
            }
            else
            {
                textRePassword.Visibility = Visibility.Visible;
            }
        }
        private void Border_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if (e.ChangedButton == MouseButton.Left)
            {
                this.DragMove();
            }
        }
    }
}
