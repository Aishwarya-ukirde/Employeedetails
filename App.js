import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeCard from '../src/Components/EmployeeCard';
import EmployeeDetail from '../src/Components/EmployeeDetail'
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    axios.get('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => setEmployees(response.data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = () => {
    const employee = employees.find(emp => emp.id === parseInt(searchId));
    setSelectedEmployee(employee);
  };

  const handleDelete = id => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handleSave = editedEmployee => {
    setEmployees(employees.map(emp => emp.id === editedEmployee.id ? editedEmployee : emp));
  };

  const handleSelect = id => {
    setSelectedIds(selectedIds.includes(id)
      ? selectedIds.filter(selectedId => selectedId !== id)
      : [...selectedIds, id]
    );
  };

  const handleDeleteSelected = () => {
    setEmployees(employees.filter(emp => !selectedIds.includes(emp.id)));
    setSelectedIds([]);
  };

  return (
    <div className="App">
      <h1>Employee Dashboard</h1>
      <div>
        <input
          type="text"
          value={searchId}
          onChange={e => setSearchId(e.target.value)}
          placeholder="Search by ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {selectedEmployee && <EmployeeDetail employee={selectedEmployee} />}
      <div className="employee-list">
        {employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onDelete={handleDelete}
            onSave={handleSave}
            onSelect={handleSelect}
          />
        ))}
      </div>
      {selectedIds.length > 0 && (
        <button onClick={handleDeleteSelected}>Delete Selected</button>
      )}
    </div>
  );
};

export default App;
