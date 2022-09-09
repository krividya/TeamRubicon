import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from '@fortawesome/free-solid-svg-icons';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password:'',
      confirmPassword:'',
      type:'password',
      value:false,
      clicked:false,
      iconName:faEyeSlash,
      typeConfirm:'password',
      clickedConfirm:false,
      iconNameConfirm:faEyeSlash,
      firstclass:'sub-part',
      lastclass:'sub-part',
      emailclass:'sub-part',
      userclass:'sub-part',
      passclass:'sub-part',
      confirmPassClass:'sub-part',
      confirmWrong:false,
      passwordLength:false,
      groupName:'group',
      buttonClass:'register-button',
      registerSuccesful: false
    };
    this.handleUser =this.handleUser.bind(this);
    this.handlePass=this.handlePass.bind(this);
    this.handleIconClick=this.handleIconClick.bind(this);
    this.handleFirstName=this.handleFirstName.bind(this);
    this.handleLastName=this.handleLastName.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleEmpty=this.handleEmpty.bind(this);
    this.handleIconClickConfirm=this.handleIconClickConfirm.bind(this);
    this.handlePassConfirm=this.handlePassConfirm.bind(this);
    this.handlePasswordLength=this.handlePasswordLength.bind(this);
    this.registerSuccesfully=this.registeredSuccessfully.bind(this);
    this.handleConfirmWrong=this.handleConfirmWrong.bind(this);
  }
  handleFirstName(event){
    this.setState({
      firstname: event.target.value,
    });
  }
  handleLastName(event){
    this.setState({
      lastname: event.target.value,
    });
  }
  handleEmail(event){
    this.setState({
      email: event.target.value,
    });
  }
  handleUser(event){
    this.setState({
      username: event.target.value,
    });
  }
  handlePass(event){
    this.setState({
      password:event.target.value,
    });
  }
  handlePassConfirm(event){
    this.setState({
      confirmPassword:event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    if(this.state.firstname === '' || this.state.lastname === '' || this.state.username ===''
      || this.state.email=== '' || this.state.password === '' || this.state.confirmPassword===''){
      this.setState({
        value:true,
      });
      if(this.state.firstname === ''){
        this.setState({
          firstclass:'register-error'
        });
      }
      if(this.state.lastname === ''){
        this.setState({
          lastclass: 'register-error'
        });
      }
      if(this.state.email === ''){
        this.setState({
          emailclass: 'register-error'
        });
      }
      if(this.state.password === ''){
        this.setState({
          passclass: 'register-error'
        });
      }
      if(this.state.confirmPassword === ''){
        this.setState({
          confirmPassClass: 'register-error'
        });
      }
      if(this.state.username === ''){
        this.setState({
          userclass: 'register-error'
        });
      }
      if(this.state.confirmPassword !== this.state.password){
        if(this.state.password >=8){
          this.setState({
            confirmWrong:true,
            buttonClass:'button-other-error'
          });
        }
        else{
        this.setState({
          confirmWrong:true,
          buttonClass:'button-twoerror'
        });
      }
        if(this.state.password.length < 8){
          if(this.state.password.length !== 0){
            this.setState({
              passwordLength:true,
              groupName:'group-password',
            });
          }
        }
      } else if(this.state.password.length < 8){
          if(this.state.password.length !== 0){
            this.setState({
              passwordLength:true,
              groupName:'group-password',
              buttonClass:'button-error'
            });
          }
      }
    }
    else if(this.state.confirmPassword !== this.state.password){
      if(this.state.password.length >=8){
        this.setState({
          confirmWrong:true,
          buttonClass:'button-other-error'
        });
      }
      else{
      this.setState({
        confirmWrong:true,
        buttonClass:'button-twoerror'
      });
      }
    }
    else if(this.state.password.length < 8){
      this.setState({
        passwordLength:true,
        groupName:'group-password',
        buttonClass:'button-error'
      });
    }
    else{
      const user = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }
      axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
      this.setState({
        value:false,
        username:'',
        password:'',
        firstname:'',
        lastname:'',
        confirmPassword:'',
        email:'',
        firstclass:'sub-part',
        lastclass:'sub-part',
        emailclass:'sub-part',
        passclass:'sub-part',
        userclass:'sub-part',
        confirmPassClass:'sub-part',
        registerSuccessful: true
      });
    }
}
  handleEmpty() {
    return(
      <div
      className="error-message"
      style={{
        display: this.state.value? '' : 'none',
      }}>
       <i class="fa fa-times-circle"></i>
        Please fill in all the fields!
    </div>
    );
  }
  registeredSuccessfully(){
    return(
      <div
      className="registered-message"
      style={{
        display: this.state.registerSuccessful? '' : 'none',
      }}>
      <FontAwesomeIcon icon={faCircleCheck} className="check-icon"/>
      Registered Successfully!  Proceed to Login Page.
    </div>
    );
  }
  handleConfirmWrong() {
    return(
      <div
      className="password-error"
      style={{
        display: this.state.confirmWrong? '' : 'none',
      }}>
       <p>Two passwords don't match</p>
    </div>
    );
  }
  handlePasswordLength() {
    return(
      <div
      className="password-error"
      style={{
        display: this.state.passwordLength? '' : 'none',
      }}>
       <p>Password is not long enough</p>
    </div>
    );
  }
  handleIconClick() {
    if(this.state.clicked){
      this.setState({
        iconName: faEye,
        clicked: !this.state.clicked,
        type: "text"
      });
    }
    else{
      this.setState({
        iconName: faEyeSlash,
        clicked: !this.state.clicked,
        type: "password"
      });
    }
  }
  handleIconClickConfirm() {
    if(this.state.clickedConfirm){
      this.setState({
        iconNameConfirm: faEye,
        clickedConfirm: !this.state.clickedConfirm,
        typeConfirm: "text"
      });
    }
    else{
      this.setState({
        iconNameConfirm: faEyeSlash,
        clickedConfirm: !this.state.clickedConfirm,
        typeConfirm: "password"
      });
    }
  }
  render() {
    return(
      <div className="background">
        <h4>REGISTER</h4>
        {this.handleEmpty()}
        {this.registeredSuccessfully()}
        <form className="form">
        <div className="group">
          <label className="label-register">First Name</label>
          <input className={this.state.firstclass} type="text" onChange={this.handleFirstName} value={this.state.firstname}/>
          </div>
          <div className="group">
          <label className="label-register">Last Name</label>
          <input className={this.state.lastclass} type="text" onChange={this.handleLastName} value={this.state.lastname}/>
          </div>
          <div className="group">
          <label className="label-register">Email</label>
          <input className={this.state.emailclass} type="text" onChange={this.handleEmail} value={this.state.email}/>
          </div>
          <div className="group">
          <label className="label-register">Username</label>
          <input className={this.state.userclass}type="text" onChange={this.handleUser} value={this.state.username}/>
          </div>
            <div className="group">
              <label className="label-register">Password (8 or more characters)</label>
              <FontAwesomeIcon icon={this.state.iconName} className="icon-register" onClick={this.handleIconClick}/>
              <input className={this.state.passclass} type={this.state.type} onChange={this.handlePass} value={this.state.password}/>
              {this.handlePasswordLength()}
            </div>
            {/* <div className="group2">
            <input type="checkbox" id="scales" name="showPassword" onClick={this.handleChecked}/>
            <label for="showPassword">Show Password</label>
            </div> */}
             <div className={this.state.groupName}>
              <label className="label-register">Confirm Password</label>
              <FontAwesomeIcon icon={this.state.iconNameConfirm} className="icon-register" onClick={this.handleIconClickConfirm}/>
              <input className={this.state.confirmPassClass} type={this.state.typeConfirm} onChange={this.handlePassConfirm} value={this.state.confirmPassword}/>
              {this.handleConfirmWrong()}
            </div>
            <button className={this.state.buttonClass}
                    type="submit"
                    onClick={this.handleSubmit}>SUBMIT</button>
        </form>
      </div>
    );
  }
}