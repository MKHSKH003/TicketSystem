﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketSystemApi.Entities;

namespace TicketSystemApi.Services
{
    public interface IEventLoggerService
    {
        void LogEvent(string username, string key);
    }
}
