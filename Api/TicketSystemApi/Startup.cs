using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using TicketSystemApi.Services;

namespace TicketSystemApi
{
    public class Startup
    {
        private readonly string connstring = @"server=41.185.8.134;userid=targeton_root;password=WebDev@2017;database=targeton_TicketSystem;SSL Mode=None";

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }


        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<Entities.Context>(options => 
            options.UseMySQL(connstring));

            // Add application services.IEventLoggerService
            services.AddScoped<IEventLoggerService, EventLoggerService>();
            services.AddScoped<IMessagesService, MessagesService>();
            services.AddScoped<IMoviesService, MoviesService>();
            services.AddScoped<IBookingService, BookingService>();
            services.AddScoped<ILoginService, LoginService>();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();
        }
    }
}
