using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface IStudentService
    {
        string addStudent(string name, string cell, string email, string location, string isAdmin, string createdBy);
        IEnumerable<Students> Get();
        (IEnumerable<Students>, string error) UpdateStudentImage(int id, string image, string username);
        IEnumerable<Students> UpdatePaymentStatus(int id, string username);
        IEnumerable<Students> Delete(int id, string username);
    }
}
