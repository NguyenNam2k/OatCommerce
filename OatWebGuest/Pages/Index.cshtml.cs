using Core.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OatWebGuest.Pages
{
    // View model dùng để hiển thị sản phẩm ngoài web
    public class ProductCardViewModel
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public decimal SellPrice { get; set; }
        public int NumberOfInventory { get; set; }
        public string CategoryName { get; set; } = string.Empty;
        public string? Image { get; set; }
    }

    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly Management_System_ProjectContext _context;

        public IndexModel(ILogger<IndexModel> logger, Management_System_ProjectContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IList<ProductCardViewModel> Products { get; private set; } = new List<ProductCardViewModel>();

        public async Task OnGetAsync()
        {
            // Tương đương LoadProducts() trong HomePage.xaml.cs
            Products = await _context.Products
                .Include(p => p.Category)
                .Select(p => new ProductCardViewModel
                {
                    ProductId = p.ProductId,
                    ProductName = p.ProductName,
                    SellPrice = p.SellPrice,
                    NumberOfInventory = p.NumberOfInventoty,
                    CategoryName = p.Category != null ? p.Category.CategoryName : "Uncategorized",
                    Image = p.Image
                })
                .ToListAsync();
        }
    }
}
