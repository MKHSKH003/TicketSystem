using System;
using System.Collections.Generic;

namespace TicketSystemApi.Entities
{
    public class Booking
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Cell { get; set; }
        public string Email { get; set; }
        public string Location { get; set; }
        public int People { get; set; }
        public string Film { get; set; }
        public string Date { get; set; }
        public string PaymentDate { get; set; }
        public string Status { get; set; }
        public string Image { get; set; }
        public int Cost { get; set; }
    }
}
