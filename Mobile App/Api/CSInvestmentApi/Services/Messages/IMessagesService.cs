﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface IMessagesService
    {
        IEnumerable<Messages> Get();
        IEnumerable<Messages> SendMessage(string username, string message);
    }
}
