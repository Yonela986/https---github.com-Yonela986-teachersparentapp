/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Login from './Login'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
// import SignUp from './SignUp';
// const style = {
//     nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
//     heading: `text-white text-3xl`
// }

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">School Chat App</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {user ? <LogOut /> : <Login />}
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;