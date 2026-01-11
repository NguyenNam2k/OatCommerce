using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace PRN212_ProjectTeam1
{
    /// <summary>
    /// Interaction logic for AdminPage.xaml
    /// </summary>
    public partial class AdminPage : Window
    {
        public AdminPage()
        {
            InitializeComponent();
            RenderAdminPages.Children.Clear();
            RenderAdminPages.Children.Add(new Dashboard());
        }

        private void Logout_Click(object sender, RoutedEventArgs e)
        {
            Login signUp = new Login();
            signUp.Show();
            this.Hide();
        }

        private void Account_Click(object sender, RoutedEventArgs e)
        {
            RenderAdminPages.Children.Clear();
            RenderAdminPages.Children.Add(new QLAccount());
        }

        private void Dashboard_Click(object sender, RoutedEventArgs e)
        {
            RenderAdminPages.Children.Clear();
            RenderAdminPages.Children.Add(new Dashboard());
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            this.WindowState = WindowState.Maximized;
        }
    }

}