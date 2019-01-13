using System.Collections.Generic;
using System.Linq;
using TicketSystemApi.Entities;

namespace TicketSystemApi.Converters
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

    }
}