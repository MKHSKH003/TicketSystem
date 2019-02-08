using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using CSInvestmentApi.Converters;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public class StudentService : IStudentService
    {
        private readonly Context _ticketSystemDbContext;
        private readonly IEventLoggerService _eventLoggerService;

        public StudentService(Context ticketSystemDbContext, IEventLoggerService eventLoggerService)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
            _eventLoggerService = eventLoggerService;
        }

        public IEnumerable<Students> Get()
        {
            return _ticketSystemDbContext.Students.Select(student => StudentsConveter.ConvertStudentToEntityModel(student));
        }

        public (IEnumerable<Students>, string error) UpdateStudentImage(int id, string image, string username)
        {
            if (checkUrl(image))
            {
                var student = _ticketSystemDbContext.Students.Find(id);
                student.Image = image;
                _ticketSystemDbContext.Students.Update(student);
                _ticketSystemDbContext.SaveChanges();

                return (Get(), "Success");
            }
            else
            {
                return (Get(), "Invalid image URL");
            }
        }

        public IEnumerable<Students> UpdatePaymentStatus(int id, string username)
        {
            //_eventLoggerService.LogEvent(username, "update-payment-status");
            var student = _ticketSystemDbContext.Students.Find(id);
            student.PaymentStatus = "Paid";
            _ticketSystemDbContext.Students.Update(student);
            _ticketSystemDbContext.SaveChanges();

            return Get();
        }

        public IEnumerable<Students> Delete(int id, string username)
        {
           // _eventLoggerService.LogEvent(username, "delete-student");
            var booking = _ticketSystemDbContext.Students.Find(id);
            _ticketSystemDbContext.Students.Remove(booking);
            _ticketSystemDbContext.SaveChanges();

            return Get();
        }

        public string addStudent(string name, string cell, string email, string location, string isAdmin, string createdBy)
        {
            string results = CheckEntries(name, cell, email, location, isAdmin);
            if(results.Equals("true"))
            {
                SendConfirmationEmail( name, email);
                _eventLoggerService.LogEvent(createdBy, "new student");
                int userId = _ticketSystemDbContext.Users.Count()+1;
                _ticketSystemDbContext.Users.Add(new Users()
                {
                    Id = userId,
                    Name = name,
                    Password = "welcome2019",
                    IsAdmin = isAdmin == "Yes"? 1: 0,
                });

                _ticketSystemDbContext.Students.Add(new Students()
                {
                    Id = userId,
                    Name = name,
                    Cell = cell,
                    Email = email,
                    Location = location,
                    PaymentStatus = "Unpaid",
                    Image = ""
            });
            _ticketSystemDbContext.SaveChanges();
            }
            return results;
        }

        public bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        public bool checkUrl(string URL)
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

        public string CheckEntries(string name, string cell, string email, string location, string admin)
        {
            string resultEntry = "true";
            if(name.Equals("null")){ resultEntry = "Your name";}
            else if(cell.Equals("null")){ resultEntry = "Cell number";}
            else if (email.Equals("null") || !IsValidEmail(email)) { resultEntry = "Email, invalid";}
            else if (location.Equals("null")) { resultEntry = "Location";}
            else if (admin.Equals("null")) { resultEntry = "if user is admin";}
            return resultEntry;
        }

        public void SendConfirmationEmail(string name, string email)
        {
            var client = new SmtpClient("mail.targetonline.co.za", 587)
            {
                Credentials = new NetworkCredential("skhumbuzo.mkhungo@targetonline.co.za", "Webdev@2017"),
                EnableSsl = true
            };
            var message = new StringBuilder();
            message.Append("Hi " + name + "\n\n");
            message.Append("This is a comfirmatiom email that you have been successfully registered with CS Investment, welcome." + "\n\n");
            message.Append("Kind Regards" + "\n" + "Client Support");

            client.Send("info@csinvestment.co.za", email, "REGISTRATION CONFIRMATION", message.ToString());
        }

    }
}
