 using System;
using System.Collections.Generic;
using System.Linq;
using TicketSystemApi.Entities;
using TicketSystemApi.Converters;

namespace TicketSystemApi.Services
{
    public class MoviesService : IMoviesService
    {
        private readonly Context _ticketSystemDbContext;
        public MoviesService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public IEnumerable<Movies> Get()
        {
            return _ticketSystemDbContext.Movies.Select(movie => MoviesConveter.ConvertMovieToEntityModel(movie));
        }

    }
}
