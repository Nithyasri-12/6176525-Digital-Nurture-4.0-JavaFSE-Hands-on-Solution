import React from 'react';
import EmployeeCard from './EmployeeCard';

const employees = [
  { id: 1, name: 'Alice Johnson', designation: 'Developer' },
  { id: 2, name: 'Bob Smith', designation: 'Designer' },
  { id: 3, name: 'Carol Lee', designation: 'QA Engineer' },
];

function EmployeeList() {
  return (
    <div>
      <h2>Employees</h2>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {employees.map(emp => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
