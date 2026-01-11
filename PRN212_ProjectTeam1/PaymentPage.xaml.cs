using Core.Models;
using System.Collections.Generic;
using System.Windows;

namespace PRN212_ProjectTeam1
{
    public partial class PaymentPage : Window
    {
        public PaymentPage(List<Product> products)
        {
            InitializeComponent();
            ProductListView.ItemsSource = products;
        }

        private void ConfirmPayment_Click(object sender, RoutedEventArgs e)
        {
            // Hiển thị thông báo thanh toán thành công
            MessageBox.Show("Thanh toán thành công!");

            // Điều hướng trở lại màn hình HomePage
            HomePage homePage = new HomePage();
            homePage.Show();

            // Đóng cửa sổ hiện tại
            this.Close();
        }

        private void BackButton_Click(object sender, RoutedEventArgs e)
        {
            // Điều hướng trở lại màn hình HomePage
            HomePage homePage = new HomePage();
            homePage.Show();

            // Đóng cửa sổ hiện tại
            this.Close();
        }
    }
}
