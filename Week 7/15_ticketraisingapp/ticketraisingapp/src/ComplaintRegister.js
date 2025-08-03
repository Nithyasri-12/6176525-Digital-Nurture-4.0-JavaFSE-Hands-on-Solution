import React, { useState } from 'react';

function generateReference() {
  return Math.floor(100000 + Math.random() * 900000);
}

function ComplaintRegister() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!complaint.trim()) {
      alert('Please enter your complaint.');
      return;
    }

    const ref = generateReference();
    alert(
      `Thanks ${name}\nYour complaint was submitted.\nTransaction ID is: ${ref}`
    );

    setName('');
    setComplaint('');
  };

  return (
    <div>
      <h1 style={{ color: 'red' }}>Register your complaints here!!!</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 500, gap: 8 }}>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', fontWeight: '600' }}>
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: 6 }}
            placeholder="Enter your name"
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', fontWeight: '600' }}>
            Complaint:
          </label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            rows={4}
            style={{ width: '100%', padding: 6 }}
            placeholder="Describe your issue"
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
