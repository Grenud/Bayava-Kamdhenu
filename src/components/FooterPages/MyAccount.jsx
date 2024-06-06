import React, { useState } from 'react';
import './MyAccount.css';

export default function MyAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div className='login_form'>
      <h1>Login</h1>
      <form className='login_value'>
        <label htmlFor='username'>
          Username or email address
          <span> *</span>
        </label>
        <br />
        <input
          type='text'
          name='username'
          id='username'
          autoComplete='username'
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <br />
        <label htmlFor='password'>
          Password
          <span> *</span>
        </label>
        <br />
        <input
          type='password'
          name='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={handlePasswordChange} />

        <div className='form-actions'>
          <button type='submit'>Login</button>
          <label className='remember-me'>
            <input
              type='checkbox'
              name='rememberMe'
              checked={rememberMe}
              onChange={handleRememberMeChange} />
              <span>Remember me</span>
          </label>
        </div>
      </form>
    </div>
  );
}
