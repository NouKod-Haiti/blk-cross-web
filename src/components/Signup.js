import React, { useState, useRef } from 'react';
// import axios from 'axios';
import SignupForm from '../screens/signup';


import { useDispatch, useSelector } from 'react-redux';
import { isEmail } from 'validator';

import { register } from '../actions/auth';



function Signup() {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    organization: '',
  });
  const [successful, setSuccessful] = useState(false);
  const form = useRef();
  const checkBtn = useRef();
   const dispatch = useDispatch();

   const required = (value) => {
     if (!value) {
       return (
         <div>
           This field is required!
         </div>
       );
     }
   };

   const validEmail = (value) => {
     if (!isEmail(value)) {
       return (
         <div>
           This is not a valid email.
         </div>
       );
     }
   };

   const vname = (value) => {
     if (value.length < 3 || value.length > 40) {
       return (
         <div>
           The username must be between 3 and 40 characters.
         </div>
       );
     }
   };

   const vpassword = (value) => {
     if (value.length < 6 || value.length > 40) {
       return (
         <div>
           The password must be between 6 and 40 characters.
         </div>
       );
     }
   };

   const vpasswordConfirmation = (value) => {
     if (value !== vpassword) {
       return (
         <div>
           Should match the password above.
         </div>
       );
     }
   };

   const vorganization = (value) => {
     if (value.length < 6 || value.length > 50) {
       return (
         <div>
           The password must be between 6 and 40 characters.
         </div>
       );
     }
   }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();
    const data = {
      name: state.name,
      email: state.email,
      password: state.password,
      passwordConfirmation: state.passwordConfirmation,
      organization: state.organization,
    };
    console.log(data);
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(
        register(data)  
      )
        .then(() => {
          setSuccessful(true);
          // window.location.href = '/success';
        })
        .catch(() => {
          setSuccessful(false);
        });
    }

    // const data = {
    //   name: state.name,
    //   email: state.email,
    //   password: state.password,
    //   passwordConfirmation: state.passwordConfirmation,
    //   organization: state.organization,
    // };
    // console.log(data);
    //  console.log(process.env.REACT_APP_KEY);
    //  console.log('api:', process.env.REACT_APP_API);
    // axios
    //   .post(process.env.REACT_APP_API + '/users/signup', state, {
    //     headers: {
    //       'X-BLK-CROSS-KEY': process.env.REACT_APP_KEY,
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // window.location.href = '/success';
    //connect with API etc...
  };
  
  return (
    <>
      {!successful && (
        <SignupForm
          refForm={form}
          name={state.name}
          nameValidation={[required, vname]}
          handleChangeName={handleChange}
          email={state.email}
          emailValidation={[required, validEmail]}
          handleChangeEmail={handleChange}
          password={state.password}
          passwordValidation={[required, vpassword]}
          handleChangePassword={handleChange}
          PasswordConfirmation={state.passwordConfirmation}
          passwordVapasswordConfirmationValidationlidation={[
            required,
            vpasswordConfirmation,
          ]}
          handleChangePasswordConfirmation={handleChange}
          organization={state.organization}
          organizationValidation={[required, vorganization]}
          handleChangeOrganization={handleChange}
          handleSubmit={handleSubmit}
          checkButton={checkBtn}
        />
      )}
    </>
  );
}

export default Signup;
