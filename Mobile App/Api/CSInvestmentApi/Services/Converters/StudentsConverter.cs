﻿using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Converters
{
    public class StudentsConveter
    {

        public static Students ConvertStudentToEntityModel(Students student)
        {
            return new Students()
            {
                Id =student.Id,
                Name= student.Name,
                Cell= student.Cell,
                Email= student.Email,
                Location= student.Location,
                PaymentStatus= student.PaymentStatus,
                Image= student.Image,
            };
        }

    }
}