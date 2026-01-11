using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.IRepository
{
    public interface IBillRepository
    {
        List<Bill> GetBill();
        void UpdateBill(Bill Bill);
        void AddBill(Bill Bill);
        Bill GetBillById(int id);
        List<Bill> GetListBillByStatusOrderByDate(string status);
    }
}
