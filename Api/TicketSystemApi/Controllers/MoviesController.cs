using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Connector;
using TicketSystemApi.Model;
using Microsoft.AspNetCore.Mvc;
using TicketSystemApi.Services;
using TicketSystemApi.Entities;

namespace TicketSystemApi.Controllers
{
    [Route("api/movies")]
    public class MoviesController : Controller
    {
        private readonly IMoviesService _moviesService;
        public MoviesController(IMoviesService moviesService)
        {
            _moviesService =  moviesService;
        }

        // GET api/movies
        [HttpGet("get-all-movies")]
        public IEnumerable<Movies> Get()
        {
            return _moviesService.Get();
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
