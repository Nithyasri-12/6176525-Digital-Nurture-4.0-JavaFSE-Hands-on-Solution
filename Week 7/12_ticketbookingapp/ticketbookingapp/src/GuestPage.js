import React from 'react';

function UserPage() {
  return (
    <div>
      <h1>Welcome back</h1>
      <BookingSection />
    </div>
  );
}

function BookingSection() {
  return (
    <div>
      <p>You can now book your flight.</p>
      <button>Book Ticket</button>
    </div>
  );
}

export default UserPage;
