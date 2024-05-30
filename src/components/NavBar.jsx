import React from 'react';
import Login from './Login'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignUp from './SingUp';
// const style = {
//     nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
//     heading: `text-white text-3xl`
// }

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className>
      <h1 className>School Chat App</h1>
      <SignUp />
      {user ? <LogOut /> : <Login />}

    </div>
  );
};

export default Navbar;