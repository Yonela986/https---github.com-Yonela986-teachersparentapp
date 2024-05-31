import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import { auth } from "../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login";
import SignUp from "./components/SignUp";



function App() {
  const [user] = useAuthState(auth);

  const redirectToLogin = () => {
    // Redirect to the login page
    window.location.href = "/login";
  };
const redirectToChat = () => {
  window.location.href = '/chat';
}

  const handleLogout = () => {
    auth.signOut();
    // After logout, you might want to redirect users to the login page
    window.location.href = "/login";
  };

  //  console.log(user)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login redirectToChat={redirectToChat}/>} />
          <Route
            path="/"
            element={<SignUp redirectToLogin={redirectToLogin} />}
          />
          
        </Routes>
      </Router>
      {/* //Logout button */}
          {user && (
            <button onClick={handleLogout}></button>
          )}
          
    </div>
  );
}

export default App;
