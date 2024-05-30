import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";


import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User logged in successfully
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      // Handle errors
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <h2>Please Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
