using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OatWebGuest.Pages.Account;

public class LoginModel : PageModel
{
    [BindProperty]
    public LoginInput Input { get; set; } = new();

    public string? ErrorMessage { get; set; }
    public string? SuccessMessage { get; set; }

    public void OnGet()
    {
        SuccessMessage = TempData["SignupSuccess"] as string;
    }

    public IActionResult OnPost()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        // Placeholder: ch?a tích h?p DB (theo yêu c?u). Có th? thay b?ng EF/Identity sau.
        // T?m th?i coi nh? ??ng nh?p thành công.
        return RedirectToPage("/Index");
    }

    public sealed class LoginInput
    {
        [Required(ErrorMessage = "Vui lòng nh?p tên ??ng nh?p")]
        [Display(Name = "Tên ??ng nh?p")]
        public string UserName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Vui lòng nh?p m?t kh?u")]
        [Display(Name = "M?t kh?u")]
        public string Password { get; set; } = string.Empty;

        [Display(Name = "Ghi nh? ??ng nh?p")]
        public bool RememberMe { get; set; }
    }
}
