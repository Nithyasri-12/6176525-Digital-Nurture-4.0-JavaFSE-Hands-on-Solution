import React, { useState } from 'react';

function validateEmail(email) {
  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');
  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
  };

  const getError = () => {
    if (form.name.trim().length < 5) {
      return 'Full Name must be 5 characters long!';
    }
    if (!validateEmail(form.email.trim())) {
      return 'Email is not valid';
    }
    if (form.password.length < 8) {
      return 'Password must be 8 characters long!';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = getError();
    if (error) {
      alert(error);
      return;
    }

    alert(`Registration successful for ${form.name}`);

    setForm({ name: '', email: '', password: '' });
    setTouched({ name: false, email: false, password: false });
  };

  const nameError =
    touched.name && form.name.trim().length > 0 && form.name.trim().length < 5
      ? 'Name must be at least 5 characters'
      : null;
  const emailError =
    touched.email && form.email.trim().length > 0 && !validateEmail(form.email.trim())
      ? 'Email must contain "@" and "." in correct order'
      : null;
  const passwordError =
    touched.password && form.password.length > 0 && form.password.length < 8
      ? 'Password must be at least 8 characters'
      : null;

  return (
    <div>
      <h1 style={{ color: 'red' }}>Register Here!!!</h1>
      <form onSubmit={handleSubmit} noValidate style={{ maxWidth: 400, gap: 8 }}>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', fontWeight: 600 }}>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: '100%', padding: 6 }}
            placeholder="Enter full name"
          />
          {nameError && (
            <div style={{ color: 'crimson', fontSize: 12, marginTop: 4 }}>
              {nameError}
            </div>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', fontWeight: 600 }}>Email:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: '100%', padding: 6 }}
            placeholder="Enter email"
          />
          {emailError && (
            <div style={{ color: 'crimson', fontSize: 12, marginTop: 4 }}>
              {emailError}
            </div>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', fontWeight: 600 }}>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: '100%', padding: 6 }}
            placeholder="Enter password"
          />
          {passwordError && (
            <div style={{ color: 'crimson', fontSize: 12, marginTop: 4 }}>
              {passwordError}
            </div>
          )}
        </div>

        <button type="submit" style={{ padding: '8px 16px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
