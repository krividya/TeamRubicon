import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from '@fortawesome/free-solid-svg-icons'
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      username: '',
      pastUsername: '',
      password:'',
      pastPassword:'',
      type:'password',
      value:false,
      clicked:false,
      iconName:faEyeSlash,
      userClass:'part',
      passClass:'part',
      user: {},
      incorrectLogin:false
    };
    this.handleUsername =this.handleUsername.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleIconClick=this.handleIconClick.bind(this);
    this.handleEmpty=this.handleEmpty.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleLoginError=this.handleLoginError.bind(this);
    this.handleIconClick=this.handleIconClick.bind(this);
  }
  handleUsername(event){
    this.setState({
      username: event.target.value,
    });
  }
  handlePassword(event){
    this.setState({
      password: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    if(this.state.username === '' || this.state.password === ''){
      this.setState({
        value:true,
      });
      if(this.state.username === ''){
        this.setState({
          userClass:'error'
        });
      }
      if(this.state.password === ''){
        this.setState({
          passClass:'error'
        });
      }
    } else{
      axios.get('http://localhost:5000/users/' + this.state.username)
      .then(res => {
        if(res.data.length > 0){
          console.log(res.data[0].username);
          this.setState({
            user:res.data
          })
          window.localStorage.setItem("isLoggedIn", true);
          window.localStorage.setItem("username", res.data[0].username);
          this.props.navigate("/Home");
        } else{
          this.handleLoginError();
        }
      })
      .catch((error) => {
        console.log(error);
      })
      this.setState({
        value:false,
        pastUsername: this.state.username,
        pastPassword: this.state.password,
        userClass:'part',
        passClass:'part'
      });
    }
  }
  handleEmpty() {
    return(
      <div
      className="error-login"
      style={{
        display: this.state.value? '' : 'none',
      }}>
       <i class="fa fa-times-circle"></i>
        Please fill in all the fields!
    </div>
    );
  }
  handleLoginError() {
    return(
      <div
      className="incorrect-login"
      style={{
        display: this.state.incorrectLogin? '' : 'none',
      }}>
       <i class="fa fa-times-circle"></i>
        Incorrect username or password!
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
  render() {
    return(
      <div className="container">
        <h4>LOGIN</h4>
        {this.handleEmpty()}
        {this.handleLoginError()}
        <form className="form">
          <div className="group">
          <label className="label">Username</label>
          <input className={this.state.userClass} placeholder="Enter Username" type="text" onChange={this.handleUsername} value={this.state.username}/>
          </div>
            <div className="group">
              <div className="group1">
              <label className="label">Password</label>
              <a href="/"><h6>Forgot Password?</h6></a>
            </div>
            <FontAwesomeIcon icon={this.state.iconName} className="icon" onClick={this.handleIconClick}/>
            <input className={this.state.passClass} placeholder="Enter Password" type={this.state.type} onChange={this.handlePassword} value={this.state.password}/>
            </div>
            {/* <div className="group2">
            <input type="checkbox" id="scales" name="showPassword" onClick={this.handleChecked}/>
            <label for="showPassword">Show Password</label>
            </div> */}
            <button className="submit-button"
                    type="submit"
                    onClick={this.handleSubmit}>SUBMIT</button>
             <div>
              <div className="group2">
                <p>Don't have an account?</p>
                <a href="/Register"><h6>Register?</h6></a>
              </div>
            </div>
        </form>
      </div>
    );
  }
}
// import React, {useState} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye} from '@fortawesome/free-solid-svg-icons'
// import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';
// //import { Navigate, useNavigate } from 'react-router-dom';

// function Login(){
//   const [username, setUsername] = useState('');
//   const [pastUsername, setPastUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [pastPassword, setPastPassword] = useState('');
//   const [type, setType] = useState('password');
//   const [value, setValue] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const [iconName, setIconName] = useState(faEyeSlash);
//   const [userClass, setUserClass] = useState('part');
//   const [passClass, setPassClass] = useState('part');
//   const [user, setUser] = useState({});
//   const [incorrectLogin, setIncorrectLogin] = useState(false);

//   const handleUsername = e => {
//     setUsername(e.target.value);
//   };
//   const handlePassword = e => {
//     setPassword(e.target.value);
//   };
//   const handleSubmit = e => {
//     e.preventDefault()
//     if(username === '' || password === ''){
//        setValue(true);
//       if(username === ''){
//         setUserClass('error');
//       }
//       if(this.state.password === ''){
//         setPassClass('error');
//       }
//     } else{
//       axios.get('http://localhost:5000/users/' + username)
//       .then(res => {
//         if(res.data.length > 0){
//           console.log(res.data);
//            setUser(res.data);
//         }
//         else{
//           setIncorrectLogin(true)
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//        setValue(false);
//        setPastUsername(username);
//        setPastPassword(password);
//        setUserClass('part')
//        setPassClass('part')
//     }
//  };
//  const handleEmpty = e => {
//    return(
//       <div
//       className="error-login"
//       style={{
//         display: value? '' : 'none',
//       }}>
//        <i class="fa fa-times-circle"></i>
//         Please fill in all the fields!
//     </div>
//     );
//   };
//   const handleLoginError = e => {
//     return(
//       <div
//       className="incorrect-login"
//       style={{
//         display: incorrectLogin? '' : 'none',
//       }}>
//        <i class="fa fa-times-circle"></i>
//         Incorrect username or password!
//     </div>
//     );
//   };
//   const handleIconClick = e => {
//     if(clicked){
//       setIconName(faEye);
//       setClicked(!clicked);
//       setType('text');
//     }
//     else{
//         setIconName(faEyeSlash);
//         setClicked(!clicked);
//         setType('password');
//    }
//  };
//  return(
//       <div className="container">
//         <h4>LOGIN</h4>
//         {handleEmpty}
//         {handleLoginError}
//         <form className="form">
//           <div className="group">
//           <label className="label">Username</label>
//           <input className={userClass} placeholder="Enter Username" type="text" onChange={handleUsername} value={username}/>
//           </div>
//             <div className="group">
//               <div className="group1">
//               <label className="label">Password</label>
//               <a href="/"><h6>Forgot Password?</h6></a>
//             </div>
//             <FontAwesomeIcon icon={iconName} className="icon" onClick={handleIconClick}/>
//             <input className={passClass} placeholder="Enter Password" type={type} onChange={handlePassword} value={password}/>
//             </div>
//             {/* <div className="group2">
//             <input type="checkbox" id="scales" name="showPassword" onClick={this.handleChecked}/>
//             <label for="showPassword">Show Password</label>
//             </div> */}
//             <button className="submit-button"
//                     type="submit"
//                     onClick={handleSubmit}>SUBMIT</button>
//              <div>
//               <div className="group2">
//                 <p>Don't have an account?</p>
//                 <a href="/Register"><h6>Register?</h6></a>
//               </div>
//             </div>
//         </form>
//       </div>
//     );
// };

// export default Login;