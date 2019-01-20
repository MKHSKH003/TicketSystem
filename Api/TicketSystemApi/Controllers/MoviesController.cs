using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Model;
using Microsoft.AspNetCore.Mvc;
using TicketSystemApi.Services;
using TicketSystemApi.Entities;
using TicketSystemApi.Models;

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
        public (IEnumerable<Movies> movies, IEnumerable<Select> options) Get()
        {
            return _moviesService.Get();
        }

        [HttpGet("delete-movie")]
        public (IEnumerable<Movies> movies, IEnumerable<Select> options) Delete([FromQuery] int id, [FromQuery] string username)
        {
            return _moviesService.Delete(id, username);
        }

        [HttpGet("update-movie-price")]
        public (IEnumerable<Movies> movies, IEnumerable<Select> options) UpdatePrice([FromQuery] int id, [FromQuery] int price, [FromQuery] string username)
        {
            return _moviesService.UpdatePrice(id, price, username);
        }

        [HttpGet("add-movie")]
        public ((IEnumerable<Movies> movies, IEnumerable<Select> options), string error) AddMovie([FromQuery] string name, [FromQuery] int price, [FromQuery] string url, [FromQuery] string username)
        {
            return _moviesService.AddMovie(name, price, url, username);
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

      
    }
}
