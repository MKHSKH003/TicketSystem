using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using TicketSystemApi.Converters;
using TicketSystemApi.Entities;

namespace TicketSystemApi.Services
{
    public class BookingService : IBookingService
    {
        private readonly Context _ticketSystemDbContext;
        private readonly IEventLoggerService _eventLoggerService;

        public BookingService(Context ticketSystemDbContext, IEventLoggerService eventLoggerService)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
            _eventLoggerService = eventLoggerService;
        }

        public IEnumerable<Booking> Get()
        {
            return _ticketSystemDbContext.Booking.Select(booking => BookingConveter.ConvertBookingToEntityModel(booking));
        }

        public IEnumerable<Booking> UpdateStatus(int id, string username)
        {
            _eventLoggerService.LogEvent(username, "update-booking-status");
            var booking = _ticketSystemDbContext.Booking.Find(id);
            booking.Status = "Paid";
            _ticketSystemDbContext.Booking.Update(booking);
            _ticketSystemDbContext.SaveChanges();
                
            return Get();
        }

        public IEnumerable<Booking> Delete(int id, string username)
        {
            _eventLoggerService.LogEvent(username, "delete-booking");
            var booking = _ticketSystemDbContext.Booking.Find(id);
            _ticketSystemDbContext.Booking.Remove(booking);
            _ticketSystemDbContext.SaveChanges();

            return Get();
        }

        public String IsBookingSuccess(string name, int cell, string email, string location, int people, string film, string date, string paymentDate,string bookedBy)
        {
            string results = CheckEntries(name,cell, email, location, people, film);
            if(results.Equals("true"))
            {
                string filmName = film.Split(',')[0];
                int filmPrice = Int32.Parse(film.Split(',')[1]);
                SendConfirmationEmail( name, email, location, people, filmName, date, paymentDate, filmPrice * people);
                _eventLoggerService.LogEvent(bookedBy, "booking");
                string image = _ticketSystemDbContext.Movies.SingleOrDefault(movie => movie.Name.Equals(filmName)).Image;
                _ticketSystemDbContext.Booking.Add(new Booking()
                {
                    Name = name,
                    Cell = cell,
                    Email = email,
                    Location = location,
                    People = people,
                    Film = filmName,
                    Date = date,
                    PaymentDate = paymentDate,
                    Status = "Unpaid",
                    Image = image,
                    Cost= filmPrice * people

                });

                _ticketSystemDbContext.SaveChanges();
            }
            return results;
        }

        bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        public string CheckEntries(string name, int cell, string email, string location, int people, string film)
        {
            string resultEntry = "true";
            if(name.Equals("null")){ resultEntry = "Your name";}
            else if(cell.Equals(0)){ resultEntry = "Cell number";}
            else if (email.Equals("null") || !IsValidEmail(email)) { resultEntry = "Email, invalid";}
            else if (location.Equals("null")) { resultEntry = "Location";}
            else if (people.Equals(0)) { resultEntry = "Number of people";}
            else if (film.Equals("Tab to select")) { resultEntry = "film section"; }
            return resultEntry;
        }

        public void SendConfirmationEmail(string name, string email,string location, int people, string film, string date, string paymentDate, int price)
        {
            var client = new SmtpClient("mail.targetonline.co.za", 587)
            {
                Credentials = new NetworkCredential("skhumbuzo.mkhungo@targetonline.co.za", "Webdev@2017"),
                EnableSsl = true
            };
            var message = new StringBuilder();
            message.Append("Hi " + name + "\n\n");
            message.Append("This is a comfirmatiom email that we have received your booking with the details below" + "\n\n");
            message.Append(String.Format("{0,-18} {1,-5}\n", "Film ","              : "+film));
            message.Append(String.Format("{0,-18} {1,-5}\n", "Date ", "             : " +date));
            message.Append(String.Format("{0,-18} {1,-5}\n", "Location ", "          : " +location));
            message.Append(String.Format("{0,-18} {1,-5}\n", "Payment date ", "     : " +paymentDate));
            message.Append(String.Format("{0,-18} {1,-5}\n", "Total price ", "        : R" + price));
            message.Append(String.Format("{0,-18} {1,-5}\n\n", "People expected ", "   : "+ people));
            message.Append("Kind Regards" + "\n" + "Client Support");

            client.Send("info@rudzani.tv", email, "BOOKING CONFIRMATION", message.ToString());
        }

    }
}
