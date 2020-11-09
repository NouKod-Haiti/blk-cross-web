import React, { useState } from 'react';
import SignupForm from '../screens/signup';

function Signup() {
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
      name: state.name,
      organization: state.organization,
    };
    console.log(data);
    window.location.href = '/success';
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
        organization={state.organization}
        handleChangeOrganization={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Signup;
