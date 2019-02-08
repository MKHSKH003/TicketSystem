 using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CSInvestmentApi.Services
{
    public class LoginService : ILoginService
    {
        private readonly Entities.Context _ticketSystemDbContext;
        public LoginService(Entities.Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public Boolean isLoginSuccess(string username, string password)
        {
            Boolean results = false;
            var entry = _ticketSystemDbContext.Users.SingleOrDefault(user => user.Name == username && user.Password == password);

            if (entry !=null)
            {
                results = true;
            }
            return results;
        }

    }
}
