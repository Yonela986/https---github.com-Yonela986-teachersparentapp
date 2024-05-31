import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { signInWithEmailAndPassword } from "firebase/auth";


import { auth } from '../firebase';

function Login({ redirectToChat }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User logged in successfully
      console.log('User logged in:', userCredential.user);
      redirectToChat();
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('Login error: ' + error.message);
      }
    }
  };

  return (
    <div>
      <h2>Please Login</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
