using System;
using System.Collections.Generic;

namespace TicketSystemApi.Models
{
    public partial class Movies
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Image { get; set; }
    }
}
