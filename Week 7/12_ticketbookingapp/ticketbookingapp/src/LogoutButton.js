import React from 'react';

function LogoutButton(props) {
  if (!props.onClick) return null;

  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default LogoutButton;
