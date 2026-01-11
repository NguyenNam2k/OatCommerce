using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OatWebGuest.Pages.Account;

public class SignupModel : PageModel
{
    [BindProperty]
    public SignupInput Input { get; set; } = new();

    public string? ErrorMessage { get; set; }
    public string? SuccessMessage { get; set; }

    public void OnGet()
    {
    }

    public IActionResult OnPost()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        // Placeholder: ch?a tích h?p DB (theo yêu c?u).
        // T?m th?i hi?n th? thành công và chuy?n v? trang ??ng nh?p.
        TempData["SignupSuccess"] = "??ng ký thành công. Vui lòng ??ng nh?p.";
        return RedirectToPage("/Account/Login");
    }

    public sealed class SignupInput
    {
        [Required(ErrorMessage = "Vui lòng nh?p tên ??ng nh?p")]
        [Display(Name = "Tên ??ng nh?p")]
        public string UserName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Vui lòng nh?p m?t kh?u")]
        [MinLength(6, ErrorMessage = "M?t kh?u t?i thi?u 6 ký t?")]
        [Display(Name = "M?t kh?u")]
        public string Password { get; set; } = string.Empty;

        [Required(ErrorMessage = "Vui lòng nh?p l?i m?t kh?u")]
        [Compare(nameof(Password), ErrorMessage = "M?t kh?u nh?p l?i không kh?p")]
        [Display(Name = "Nh?p l?i m?t kh?u")]
        public string ConfirmPassword { get; set; } = string.Empty;
    }
}
