import './App.css';
import React, {useState} from "react";
import Search from './Search.js';
import Login from './Login.js';
import About from './About.js';
import Navbar from './Navbar.js';
import Register from './Register.js';
import LoggedInNavbar from './LoggedInNavbar';
import {useNavigate } from 'react-router-dom';

function App() {
  const username = window.localStorage.getItem("username");
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  // const callBackFunction = (childData) => {
  //     setUsername(childData);
  // }
  console.log(username)
  const navigate = useNavigate();
  let component
  switch(window.location.pathname){
    case "/":
      component = <Search/>
      break
    case "/Home":
      component = <Search/>
      break
    case "/Login":
      component = <Login navigate={navigate}/>
      break
    case "/About":
      component = <About/>
      break
    case "/Register":
      component = <Register/>
  }
  return (
     <div className="App">
       {console.log(loggedIn)}
       {loggedIn ? <LoggedInNavbar username={username}/> : <Navbar/>}
       {component}
    </div>
  );
}

export default App;
