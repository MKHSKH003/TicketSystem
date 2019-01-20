using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Entities;
using TicketSystemApi.Models;

namespace TicketSystemApi.Services
{
    public interface IMoviesService
    {
        (IEnumerable<Movies> movies, IEnumerable<Select> options)  Get();
        ((IEnumerable<Movies> movies, IEnumerable<Select> options), string error) AddMovie(string name, int price, string url, string username);
        (IEnumerable<Movies> movies, IEnumerable<Select> options) Delete(int id, string username);
        (IEnumerable<Movies> movies, IEnumerable<Select> options) UpdatePrice(int id, int price, string username);
    }
}
