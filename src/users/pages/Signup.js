import React,{PureComponent} from 'react';
import SignupForm from "../components/SignupForm";


export default class Signup extends PureComponent{

    constructor(){
        super()
        this.state = {
            email:'',
            password:'',
            name:'',
            organization:''
        }
    }

    //those functions are used as callback on the SIGN UP form
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

    handleChangeName = (newName) => {
        this.setState({
        name: newName
        });
    }
    

    handleChangeOrganization= (newOG) => {
        this.setState({
          organization: newOG
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            organization: this.state.organization
            }
            console.log(data);
            window.location.href="/success";
            //connect with API etc...
    }

    render(){
        return(
            <>
                <SignupForm  
                email={this.state.email} 
                password={this.state.password}
                name={this.state.name}
                organization={this.state.organization}
                handleChangeEmail={this.handleChangeEmail}
                handleChangePassword={this.handleChangePassword}
                handleChangeName={this.handleChangeName}
                handleChangeOrganization={this.handleChangeOrganization}
                handleSubmit = {this.handleSubmit}
                />
            </>
        )
    }
}