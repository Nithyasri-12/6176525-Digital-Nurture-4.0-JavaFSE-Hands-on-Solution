// src/App.js
import React from 'react';
import './App.css';

function App() {
  const element = 'Office Space';

  const officeSpaces = [
    {
      Name: 'DBS',
      Rent: 50000,
      Address: 'Chennai',
      Image: '/Office_space.jpeg',
    },
    {
      Name: 'WeWork',
      Rent: 75000,
      Address: 'Bangalore',
      Image: '/rental_space.jpeg',
    },
  ];

  return (
    <div className="App">
      <h1 className="heading">{element}, at Affordable Range</h1>

      {officeSpaces.map((item, index) => {
        let colors = [];
        if (item.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }

        return (
          <div className="card" key={index}>
            <img
              src={item.Image}
              width="25%"
              height="25%"
              alt={item.Name}
            />
            <h1>Name: {item.Name}</h1>
            <h3 className={colors.join(' ')}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
