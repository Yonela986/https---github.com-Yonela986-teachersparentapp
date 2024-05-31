import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp({redirectToLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // User signed up successfully
      console.log('User signed up:', userCredential.user);
      redirectToLogin(); //redirecting to the login page
      console.log('Signed up');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email address is already in use.');
      } else {
        setError('Sign-up error: ' + error.message);
      }
    }
  };
  
  return (
    <div className="container">
    <h2>Please Sign Up</h2>
    {error && <p className="alert alert-danger">{error}</p>}
    <form>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSignUp} type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  </div>
  );
}

export default SignUp;
