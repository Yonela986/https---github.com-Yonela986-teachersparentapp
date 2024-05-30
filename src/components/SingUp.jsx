import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '../firebase';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // User signed up successfully
      console.log('User signed up:', userCredential.user);
    } catch (error) {
      // Handle errors
      console.error('Sign-up error:', error.message);
    }
  };

  return (
    <div>
      <h2>Please Sign Up To Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
