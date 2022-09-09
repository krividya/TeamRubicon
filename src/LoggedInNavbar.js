import React, {Component} from "react";
import logo from './images/Rubicon.logo.png';

export default class LoggedInNavbar extends Component{
  constructor(props){
    super(props);
    this.state={
     value:false
    };
    this.clickButton=this.clickButton.bind(this);
  }
  clickButton(){
    console.log('here');
    this.setState({
      value:true
    });
  }
  render() {
    return(
      <nav className="modified-nav">
        <div className="logo-image">
            <img src={logo}class="img-fluid"/>
        </div>
        <ul>
          <li>
          <div className="dropdown">
          <button className="dropbtn" onClick={this.clickButton}>{this.props.username}
          <i class="fa fa-caret-down"></i>
          </button>
          <h3>Content goes here</h3>
          <ul className="dropdown-content">
            <li><a href="/Profile">Profile</a></li>
            <li><a href="/AddResource">Add Resource</a></li>
            <li><a href="/">Sign Out</a></li>
          </ul>
          </div>
          </li>
          <div className="group-elements">
          <li>
            <a href="/About">Contact Us</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/Home">Home</a>
          </li>
          </div>
      </ul>
     </nav>

    );
  }
}