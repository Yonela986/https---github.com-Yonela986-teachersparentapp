import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import Chat from './components/ChatRoom';
import { auth } from '../src/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/Login';
import SignUp from './components/SingUp';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <Router className={style.appContainer}>
      <Switch>
      <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path='/' Component={HomePage} /> */}
      <section className='{style.sectionContainer}'>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
      </section>
      </Switch>
      
    </Router>
  );
}

export default App;