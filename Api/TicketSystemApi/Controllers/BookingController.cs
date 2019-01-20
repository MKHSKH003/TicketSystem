using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Entities;
using Microsoft.AspNetCore.Mvc;
using TicketSystemApi.Services;

namespace TicketSystemApi.Controllers
{
    [Route("api/booking")]
    public class BookingController : Controller
    {
        private readonly IBookingService _bookingService;
        private readonly IEventLoggerService _eventLoggerService;
        public BookingController(IBookingService bookingService, IEventLoggerService eventLoggerService)
        {
            _bookingService = bookingService;
            _eventLoggerService = eventLoggerService;
        }

        // GET api/login
        [HttpGet("get-all-bookings")]
        public IEnumerable<Booking> Get()
        {
            return _bookingService.Get();
        }

        [HttpGet("make-a-booking")]
        public string IsBookingSuccess([FromQuery] string name, [FromQuery] int cell, [FromQuery] string email, [FromQuery] string location, [FromQuery] int people, [FromQuery] string film, [FromQuery] string date, [FromQuery] string paymentDate, [FromQuery] string bookedBy)
        {
            return _bookingService.IsBookingSuccess(name , cell,email,location,people,film,date,paymentDate, bookedBy);
        }

        [HttpGet("update-booking-status")]
        public IEnumerable<Booking> UpdateBookingStatus([FromQuery] int id, [FromQuery] string username)
        {
            return _bookingService.UpdateStatus(id, username);
        }

        [HttpGet("delete-booking")]
        public IEnumerable<Booking> DeleteBooking([FromQuery] int id, [FromQuery] string username)
        {
            return _bookingService.Delete(id, username);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
