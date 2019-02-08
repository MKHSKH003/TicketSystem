using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Models;

namespace CSInvestmentApi.Converters
{
    public class MoviesConveter
    {

        public static Movies ConvertMovieToEntityModel(Movies movie)
        {
            return new Movies()
            {
                Id =movie.Id,
                Name=movie.Name,
                Price=movie.Price,
                Image=movie.Image
            };
        }

        public static Select ConvertMovieToModel(Movies movie)
        {
            return new Select()
            {
                label = movie.Name,
                value = (movie.Name+","+movie.Price)
            };
        }

    }
}