import React, { useState } from 'react';
import axios from 'axios';
import SignupForm from '../screens/signup';
import env from 'react-dotenv';



function Signup() {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    organization: '',
  });
  
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0RldiI6dHJ1ZSwiaWF0IjoxNjA1MTIwNDA1fQ.bsEudzWzt1O56f2VaL2QcuJs4h_DldJpWiTTTnyQrsg';

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: state.name,
      email: state.email,
      password: state.password,
      passwordConfirmation: state.passwordConfirmation,
      organization: state.organization,
    };
    console.log(data);
     console.log(process.env.REACT_APP_KEY);
     console.log('api:', process.env.REACT_APP_API);
    axios
      .post(process.env.REACT_APP_API + '/users/signup', state, {
        headers: {
          'X-BLK-CROSS-KEY': process.env.REACT_APP_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      }); 
    // window.location.href = '/success';
    //connect with API etc...
  };
  return (
    <>
      <SignupForm
        name={state.name}
        handleChangeName={handleChange}
        email={state.email}
        handleChangeEmail={handleChange}
        password={state.password}
        handleChangePassword={handleChange}
        PasswordConfirmation={state.passwordConfirmation}
        handleChangePasswordConfirmation={handleChange}
        organization={state.organization}
        handleChangeOrganization={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Signup;
