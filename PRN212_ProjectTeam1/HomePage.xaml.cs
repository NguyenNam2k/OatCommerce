using Core.Models;
using PRN212_ProjectTeam1.ViewModel;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Forms;
using System.Windows.Input;

namespace PRN212_ProjectTeam1
{
    public partial class HomePage : Window
    {
        public Management_System_ProjectContext context = new Management_System_ProjectContext();
        private List<Product> cart = new List<Product>();

        public HomePage()
        {
            InitializeComponent();
            LoadProducts();
        }

        
        private void LoadProducts()
        {
            var products = context.Products
                 .Select(p => new
                 {
                     p.ProductId,
                     p.ProductName,
                     p.SellPrice,
                     p.NumberOfInventoty,
                     p.DateAdd,
                     p.Status,
                     CategoryName = p.Category != null ? p.Category.CategoryName : "Uncategorized",
                     p.Image // Assuming Image is a URL or a path to the image
                 })
                 .ToList();

            // Setting the ItemsSource for the ListView instead of DataGrid
            ProductListView.ItemsSource = products;
        }

        private void Home_Click(object sender, RoutedEventArgs e)
        {
            LoadProducts();
        }


        private void Login_Click(object sender, RoutedEventArgs e)
        {
            Login signUp = new Login();
            signUp.Show();
            this.Hide();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            this.WindowState = WindowState.Maximized;
        }

        private void CartButton_Click(object sender, RoutedEventArgs e)
        {
            var button = sender as System.Windows.Controls.Button;

            // Lấy Product từ DataContext của Button
            var selectedProduct = button?.DataContext as dynamic;

            if (selectedProduct != null)
            {
                // Tạo một danh sách chứa sản phẩm đã chọn
                List<Product> selectedProducts = new List<Product>
        {
            new Product
            {
                ProductId = selectedProduct.ProductId,
                ProductName = selectedProduct.ProductName,
                SellPrice = selectedProduct.SellPrice,
                NumberOfInventoty = selectedProduct.NumberOfInventoty,
                DateAdd = selectedProduct.DateAdd,
                Status = selectedProduct.Status,
                Image = selectedProduct.Image
            }
        };

                // Chuyển sang PaymentPage và truyền danh sách sản phẩm
                PaymentPage paymentPage = new PaymentPage(selectedProducts);
                paymentPage.Show();
                this.Close();
            }
        }
    }
}