import React, { useState } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const mainContent = isLoggedIn ? <UserPage /> : <GuestPage />;

  const actionButton = isLoggedIn ? (
    <LogoutButton onClick={() => setIsLoggedIn(false)} />
  ) : (
    <LoginButton onClick={() => setIsLoggedIn(true)} />
  );

  return (
    <div style={{ padding: 40, fontFamily: 'system-ui, sans-serif' }}>
      {mainContent}
      <div style={{ marginTop: 10 }}>{actionButton}</div>
    </div>
  );
}

export default App;
