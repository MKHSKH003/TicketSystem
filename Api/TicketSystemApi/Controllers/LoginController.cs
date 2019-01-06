using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Connector;
using TicketSystemApi.Model;
using Microsoft.AspNetCore.Mvc;
using TicketSystemApi.Services.Login;

namespace TicketSystemApi.Controllers
{
    [Route("api/user-login")]
    public class LoginController : Controller
    {
        private readonly ILoginService _loginService;
        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        // GET api/login
        [HttpGet("users-list")]
        public IEnumerable<User> Get()
        {
            Conn mysqlGet = new Conn();
            return mysqlGet.UserList();
        }

        [HttpGet("is-login-success")]
        public bool isLoginSuccess([FromQuery] string username, [FromQuery] string password)
        {
            return _loginService.isLoginSuccess(username , password);
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
