import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeeList from './EmployeeList';
import './App.css'; 

function App() {
  const [theme, setTheme] = useState('dark'); 

  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app-container ${theme}`}>
        <header style={{ marginBottom: 20 }}>
          <h1>Employee Management</h1>
          <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </header>
        {/* No longer passing theme as prop */}
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
