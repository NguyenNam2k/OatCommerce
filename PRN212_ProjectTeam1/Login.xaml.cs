using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using Core.IRepository;
using Core.Repository;
using MaterialDesignThemes.Wpf;
using PRN212_ProjectTeam1;

namespace PRN212_ProjectTeam1
{
    /// <summary>
    /// Interaction logic for Login.xaml
    /// </summary>
    public partial class Login : Window
    {
        IUserRepository managerRepository;
        public Login()
        {
            InitializeComponent();
        }

        private void Button_Click1(object sender, RoutedEventArgs e)
        {
            SignUp signUp = new SignUp();
            signUp.Show();
            this.Hide();
        }
        private void textUserName_MouseDown(object sender, MouseButtonEventArgs e)
        {
            txtUserName.Focus();
        }

        private void txtUserName_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (!string.IsNullOrEmpty(textUsername.Text) && textUsername.Text.Length > 0)
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

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            managerRepository = new UserRepository();
            var user = managerRepository.GetUserByName(txtUserName.Text);

            if (user != null)
            {
                if (user.Password.Equals(txtPassword.Password))
                {
                    if (user.UserRole == 1)
                    {
                        AdminPage main = new AdminPage();
                        main.Show();
                        this.Hide();
                    }
                    else if (user.UserRole == 2)
                    {
                        HomePage home = new HomePage();
                        home.Show();
                        this.Hide();
                    }
                    else if (user.UserRole == 3)
                    {
                        MainWindow main = new MainWindow();
                        main.Show();
                        this.Hide();
                    }
                }
                else
                {
                    MessageBox.Show("Password is wrong!");
                }
            }
            else
            {
                MessageBox.Show("User is wrong!");
            }
        }

        private void CloseButton_Click(object sender, RoutedEventArgs e)
        {
            Window window = Window.GetWindow(this);
            if (window != null)
            {
                window.Close();
                Application.Current.Shutdown();
            }
        }
        private void MaximizeButton_Click(object sender, RoutedEventArgs e)
        {
            Window window = Window.GetWindow(this);

            if (window != null)
            {
                if (window.WindowState == WindowState.Maximized)
                {
                    window.WindowState = WindowState.Normal;
                }
                else
                {
                    window.WindowState = WindowState.Maximized;
                }
            }
        }
        private void MinimizeButton_Click(object sender, RoutedEventArgs e)
        {
            Window window = Window.GetWindow(this);

            if (window != null)
            {
                window.WindowState = WindowState.Minimized;
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
