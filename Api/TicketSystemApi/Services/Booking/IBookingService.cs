using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Entities;

namespace TicketSystemApi.Services
{
    public interface IBookingService
    {
        string isBookingSuccess(string name, int cell, string email, string location, int people, string film, string date, string paymentDate);
        IEnumerable<Booking> Get();
    }
}
