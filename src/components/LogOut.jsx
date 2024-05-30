import React from 'react';
import { signOut } from "firebase/auth";

import { auth } from '../firebase';

function Logout() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // User logged out successfully
      console.log('User logged out');
    } catch (error) {
      // Handle errors
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
