using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.IRepository
{
    public interface IEventRepository
    {
        List<Event> GetEvent();
        void InsertEvent(Event events);
        void DeleteEvent(Event events);
        Event GetEventById(int id);
    }
}
