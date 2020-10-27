import React, { PureComponent } from "react";
import LoginForm from "../components/LoginForm";

export default class Login extends PureComponent {

  constructor(){
    super()

    this.state = {
      email:'',
      password:''
    }
  }

  //those functions are used as callback on the SIGN IN form
   handleChangeEmail = (newMail) => {
      this.setState({
        email: newMail
      });
   }

   handleChangePassword = (newPass) => {
    this.setState({
      password: newPass
    });
 }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
      }
   console.log(data); 
  window.location.href = "/success";  
  //connect with API etc
  }

   

  render() {
    return (
      <>
        <LoginForm 
        email={this.state.email} 
        password={this.state.password} 
        handleChangeEmail={this.handleChangeEmail} 
        handleChangePassword={this.handleChangePassword}
        handleSubmit={this.handleSubmit} 
        />
      </>
    );
  }
}
