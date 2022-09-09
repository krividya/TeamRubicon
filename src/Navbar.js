import React, {Component} from "react";

export default class Navbar extends Component{
  render() {
    return(
      <nav className="nav">
        <ul>
          <li>
            <a href="/About">Contact Us</a>
          </li>
          <li>
            <a href="/Login">About</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/Home">Home</a>
          </li>
      </ul>
     </nav>

    );
  }
}