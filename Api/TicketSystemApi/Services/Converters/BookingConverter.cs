using System.Collections.Generic;
using System.Linq;
using TicketSystemApi.Entities;

namespace TicketSystemApi.Converters
{
    public class BookingConveter
    {

        public static Booking ConvertBookingToEntityModel(Booking booking)
        {
            return new Booking()
            {
                Id =booking.Id,
                Name= booking.Name,
                Cell= booking.Cell,
                Email= booking.Email,
                Location= booking.Location,
                People= booking.People,
                Film= booking.Film,
                Date= booking.Date,
                PaymentDate= booking.PaymentDate,
                Status= booking.Status,
                Image= booking.Image,
                Cost = booking.Cost
            };
        }

    }
}