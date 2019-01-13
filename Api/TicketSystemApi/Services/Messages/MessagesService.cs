 using System;
using System.Collections.Generic;
using System.Linq;
using TicketSystemApi.Entities;
using TicketSystemApi.Converters;

namespace TicketSystemApi.Services
{
    public class MessagesService : IMessagesService
    {
        private readonly Context _ticketSystemDbContext;
        public MessagesService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public IEnumerable<Messages> Get()
        {
            return _ticketSystemDbContext.Messages.Select(message => MessagesConveter.ConvertMessageToEntityModel(message));
        }

        public IEnumerable<Messages> SendMessage(string username, string message)
        {
            try
            {
                _ticketSystemDbContext.Messages.Add(new Entities.Messages()
                {
                    Name = username,
                    Message = message,
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }
            catch(Exception)
            {

            }
            return Get();
        }
    }
}
