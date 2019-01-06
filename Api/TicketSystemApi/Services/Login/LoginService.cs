using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketSystemApi.Services.Login
{
    public class LoginService : ILoginService
    {
        private readonly Entities.TicketSystem.Context _ticketSystemDbContext;
        public LoginService(Entities.TicketSystem.Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public Boolean isLoginSuccess(string username, string password)
        {
            Boolean results = false;
            var entry = _ticketSystemDbContext.Userlist.SingleOrDefault(user => user.Name == username && user.Password == password);

            if (entry !=null)
            {
                results = true;
            }
            return results;
        }

    }
}
