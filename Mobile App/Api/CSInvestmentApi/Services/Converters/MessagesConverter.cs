using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Converters
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