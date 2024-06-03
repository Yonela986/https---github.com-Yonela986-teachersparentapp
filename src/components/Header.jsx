import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Header({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <div className="header">
      <h2>Welcome, {user.displayName || user.email}</h2>
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Header;