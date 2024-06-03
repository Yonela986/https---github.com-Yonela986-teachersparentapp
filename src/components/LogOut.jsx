import React from "react";
import { Button } from "react-bootstrap";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // User logged out successfully
      console.log("User logged out");
    } catch (error) {
      // Handle errors
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="container">
  
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Logout;
