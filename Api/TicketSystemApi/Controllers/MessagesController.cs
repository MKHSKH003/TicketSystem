using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Model;
using Microsoft.AspNetCore.Mvc;
using TicketSystemApi.Services;
using TicketSystemApi.Entities;

namespace TicketSystemApi.Controllers
{
    [Route("api/messages")]
    public class MessagesController : Controller
    {
        private readonly IMessagesService _messagesService;
        public MessagesController(IMessagesService messagesService)
        {
            _messagesService = messagesService;
        }

        [HttpGet("get-all-messages")]
        public IEnumerable<Messages> Get()
        {
            return _messagesService.Get();
        }

        [HttpGet("send-message")]
        public IEnumerable<Messages> SendMessage([FromQuery] string username, [FromQuery] string message)
        {
            return _messagesService.SendMessage(username, message);
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
