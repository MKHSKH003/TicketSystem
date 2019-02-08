 using System;
using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Converters;
using CSInvestmentApi.Models;
using System.Net;

namespace CSInvestmentApi.Services
{
    public class MoviesService : IMoviesService
    {
        private readonly Context _ticketSystemDbContext;
        private readonly IEventLoggerService _eventLoggerService;

        public MoviesService(Context ticketSystemDbContext, IEventLoggerService eventLoggerService)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
            _eventLoggerService = eventLoggerService;
        }

        public (IEnumerable<Movies> movies, IEnumerable<Select> options) Get()
        {
            IEnumerable<Movies> movies=_ticketSystemDbContext.Movies.Select(movie => MoviesConveter.ConvertMovieToEntityModel(movie));
            IEnumerable<Select> options = _ticketSystemDbContext.Movies.Select(movie => MoviesConveter.ConvertMovieToModel(movie));

            return (movies, options);
        }

        public ((IEnumerable<Movies> movies, IEnumerable<Select> options), string error) AddMovie(string name, int price, string url, string username)
        {
            string error = checkEntries( name, price, url);
            if (error == "true")
            {
                _eventLoggerService.LogEvent(username, "add-movie");
                _ticketSystemDbContext.Movies.Add(new Movies()
                {
                    Name = name,
                    Price = price,
                    Image = url,
                });
                _ticketSystemDbContext.SaveChanges();
            }

            return (Get(), error);
        }

        public (IEnumerable<Movies> movies, IEnumerable<Select> options) Delete(int id, string username)
        {
            _eventLoggerService.LogEvent(username, "delete-movie");
            var movie = _ticketSystemDbContext.Movies.Find(id);
            _ticketSystemDbContext.Movies.Remove(movie);
            _ticketSystemDbContext.SaveChanges();

            return Get();
        }

        public (IEnumerable<Movies> movies, IEnumerable<Select> options) UpdatePrice(int id, int price, string username)
        {
            _eventLoggerService.LogEvent(username, "update-movie-price");
            var movie = _ticketSystemDbContext.Movies.Find(id);
             movie.Price = price;
            _ticketSystemDbContext.Movies.Update(movie);
            _ticketSystemDbContext.SaveChanges();

            return Get();
        }
        public string checkEntries(string name, int price, string url)
        {
            string resultEntry = "true";
            if (name.Equals("null")) { resultEntry = "Movie name"; }
            else if (price.Equals(0)) { resultEntry = "Movie price per person"; }
            else if (url.Equals("null")) { resultEntry = "Movie Cover Image Url"; }
            else if (!checkWebsite(url)) { resultEntry = "a Valid Cover Image Url!"; }
            return resultEntry;
        }


        public bool checkWebsite(string URL)
        {
            try
            {
                WebClient wc = new WebClient();
                string HTMLSource = wc.DownloadString(URL);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
