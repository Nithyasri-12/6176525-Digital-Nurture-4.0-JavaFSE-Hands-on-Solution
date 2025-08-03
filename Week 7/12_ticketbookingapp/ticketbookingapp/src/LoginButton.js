import React from 'react';

function LoginButton(props) {
  if (!props.onClick) return null; 

  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

export default LoginButton;
