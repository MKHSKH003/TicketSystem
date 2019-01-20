using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Entities;

namespace TicketSystemApi.Services
{
    public interface IBookingService
    {
        string IsBookingSuccess(string name, int cell, string email, string location, int people, string film, string date, string paymentDate, string bookedBy);
        IEnumerable<Booking> Get();
        IEnumerable<Booking> UpdateStatus(int id, string username);
        IEnumerable<Booking> Delete(int id, string username);
    }
}
