using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Converters;
using TicketSystemApi.Entities;

namespace TicketSystemApi.Services
{
    public class BookingService : IBookingService
    {
        private readonly Entities.Context _ticketSystemDbContext;
        public BookingService(Entities.Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public IEnumerable<Booking> Get()
        {
            return _ticketSystemDbContext.Booking.Select(booking => BookingConveter.ConvertBookingToEntityModel(booking));
        }

        public String isBookingSuccess(string name, int cell, string email, string location, int people, string film, string date, string paymentDate)
        {
            string results = checkEntries(name,cell, email, location, people, film);
            if(results.Equals("true"))
            {
                string image = _ticketSystemDbContext.Movies.SingleOrDefault(movie => movie.Name.Equals(film)).Image;
                int cost = (_ticketSystemDbContext.Movies.SingleOrDefault(movie => movie.Name.Equals(film)).Price)*people;
                _ticketSystemDbContext.Booking.Add(new Entities.Booking()
                {
                    Name = name,
                    Cell = cell,
                    Email = email,
                    Location = location,
                    People = people,
                    Film = film,
                    Date = date,
                    PaymentDate = paymentDate,
                    Status = "Unpaid",
                    Image = image,
                    Cost=cost

                });

                _ticketSystemDbContext.SaveChanges();
            }
            return results;
        }

        public string checkEntries(string name, int cell, string email, string location, int people, string film)
        {
            string resultEntry = "true";
            if(name.Equals("null")){ resultEntry = "Your name";}
            else if(cell.Equals(0)){ resultEntry = "Cell number";}
            else if (email.Equals("null")) { resultEntry = "Email";}
            else if (location.Equals("null")) { resultEntry = "Location";}
            else if (people.Equals(0)) { resultEntry = "Number of people";}
            else if (film.Equals("null")) { resultEntry = "Select film"; }
            return resultEntry;
        }

    }
}
