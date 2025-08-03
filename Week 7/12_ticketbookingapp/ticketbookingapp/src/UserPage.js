import React from 'react';

function GuestPage() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <FlightList />
    </div>
  );
}

function FlightList() {
  const flights = [
    { id: 1, from: 'NYC', to: 'LAX', time: '10:00 AM' },
    { id: 2, from: 'SFO', to: 'ORD', time: '1:30 PM' },
    { id: 3, from: 'MIA', to: 'SEA', time: '6:45 PM' },
  ];

  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map(f => (
          <li key={f.id}>
            {f.from} → {f.to} at {f.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestPage;
