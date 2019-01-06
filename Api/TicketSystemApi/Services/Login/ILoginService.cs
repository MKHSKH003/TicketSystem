using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketSystemApi.Services.Login
{
    public interface ILoginService
    {
        Boolean isLoginSuccess(string username, string password);
    }
}
