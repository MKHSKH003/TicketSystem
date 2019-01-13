using System.Collections.Generic;
using System.Linq;
using TicketSystemApi.Entities;

namespace TicketSystemApi.Converters
{
    public class MessagesConveter
    {

        public static Messages ConvertMessageToEntityModel(Messages message)
        {
            return new Messages()
            {
                Id =message.Id,
                Name=message.Name,
                Message=message.Message,
                Date=message.Date
            };
        }

    }
}