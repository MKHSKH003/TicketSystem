using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Model;
using Microsoft.AspNetCore.Mvc;
using TicketSystemApi.Services;
using Microsoft.AspNetCore.Cors;

namespace TicketSystemApi.Controllers
{
    [Route("welcome")]
    public class WelcomeController : Controller
    {
        [HttpGet("welcome-note")]
        public string Welcome()
        {
            return "WELCOME TO THE RU FILMS TICKET SYSTEM API :)";
        }
        
    }
}
