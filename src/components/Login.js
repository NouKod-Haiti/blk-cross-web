import React, { useState } from 'react';
import LoginForm from '../screens/login';

function Login() {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    organization: '',
  });



   const handleChange = (e) => {
     setState({
       ...state,
       [e.target.name]: e.target.value,
     });
   };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: state.email,
        password: state.password,
      };
      console.log(data);
      window.location.href = '/success';
      //connect with API etc...
    };

 
    return (
      <>
        <LoginForm
          email={state.email}
          password={state.password}
          handleChangeEmail={handleChange}
          handleChangePassword={handleChange}
          handleSubmit={handleSubmit}
        />
      </>
    );
};

export default Login;
