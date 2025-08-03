import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext); 
  const buttonClass = theme === 'dark' ? 'btn dark' : 'btn light';

  return (
    <div className="employee-card">
      <div>
        <strong>{employee.name}</strong>
      </div>
      <div>{employee.designation}</div>
      <div style={{ marginTop: 8 }}>
        <button className={buttonClass}>View</button>{' '}
        <button className={buttonClass}>Edit</button>
      </div>
    </div>
  );
}

export default EmployeeCard;
