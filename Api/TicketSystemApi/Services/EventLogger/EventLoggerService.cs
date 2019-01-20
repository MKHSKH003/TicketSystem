 using System;
using System.Collections.Generic;
using System.Linq;
using TicketSystemApi.Entities;
using TicketSystemApi.Converters;

namespace TicketSystemApi.Services
{
    public class EventLoggerService : IEventLoggerService
    {
        private readonly Context _ticketSystemDbContext;
        public EventLoggerService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public void LogEvent(string username, string key)
        {
            if(key == "booking")
            {
                _ticketSystemDbContext.Messages.Add(new Messages()
                {
                    Name = "Event Logger",
                    Message = username+" has added a new booking",
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }

            else if (key == "update-booking-status")
            {
                _ticketSystemDbContext.Messages.Add(new Messages()
                {
                    Name = "Event Logger",
                    Message = username + " has updated a booking status",
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }

            else if (key == "delete-booking")
            {
                _ticketSystemDbContext.Messages.Add(new Messages()
                {
                    Name = "Event Logger",
                    Message = username + " has delete a booking",
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }

            else if (key == "add-movie")
            {
                _ticketSystemDbContext.Messages.Add(new Messages()
                {
                    Name = "Event Logger",
                    Message = username + " has added a new movie",
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }

            else if (key == "update-movie-price")
            {
                _ticketSystemDbContext.Messages.Add(new Messages()
                {
                    Name = "Event Logger",
                    Message = username + " has updated a movie price",
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }

            else if (key == "delete-movie")
            {
                _ticketSystemDbContext.Messages.Add(new Messages()
                {
                    Name = "Event Logger",
                    Message = username + " has deleted a movie",
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }
        }
       
    }
}
