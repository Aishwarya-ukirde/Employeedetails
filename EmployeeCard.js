
import React, { useState } from 'react';

const EmployeeCard = ({ employee, onDelete, onSave, onSelect }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleSave = () => {
    onSave(editedEmployee);
    setIsEditing(false);
  };

  return (
    <div className="employee-card">
      {isEditing ? (
        <>
          <input
            type="text"
            name="employee_name"
            value={editedEmployee.employee_name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="employee_age"
            value={editedEmployee.employee_age}
            onChange={handleChange}
          />
          <input
            type="number"
            name="ID"
            value={editedEmployee.id}
            onChange={handleChange}
          />
          <input
            type="number"
            name="employee_salary"
            value={editedEmployee.employee_salary}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{employee.employee_name}</h3>
          <p>Age: {employee.employee_age}</p>
          <p>Salary: {employee.employee_salary}</p>
          <button onClick={() => onDelete(employee.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <input type="checkbox" onChange={() => onSelect(employee.id)} />
        </>
      )}
    </div>
  );
};

export default EmployeeCard;
