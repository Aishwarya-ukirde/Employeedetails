// src/components/EmployeeDetail.js
import React from 'react';

const EmployeeDetail = ({ employee }) => (
  <div className="employee-detail">
   
    <h2>{employee.employee_name}</h2>
    <p>ID :{employee.id}</p>
    <p>Age: {employee.employee_age}</p>
    <p>Salary: {employee.employee_salary}</p>
  </div>
);

export default EmployeeDetail;
