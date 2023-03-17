import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // prevent form submission
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div id='wrap'>
      <div id='loginForm'>
      <p><b>Login</b></p>
    <form>
      <label>
        Username:
        <input type="text" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit" id='login' onClick={handleLogin}>Login</button>
      <u><button type="button" id='reset' onClick={handleReset}>Reset</button></u>
    </form>
    </div>
    </div>
  );
}

export default App;