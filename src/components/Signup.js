import React, { useState, useRef } from 'react';
// import axios from 'axios';
import SignupForm from '../screens/signup';

import { useDispatch, useSelector } from 'react-redux';
import { isEmail } from 'validator';

import { register } from '../actions/auth';

// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  errorMessage: {
    color: 'red',
    marginTop: -10,
    marginBottom: 5,
    fontSize: 10,
    // backgroundColor: 'green',
    textAlign: 'left',
    marginLeft: 20,
  },
}));

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
  const classes = styles();

  const required = (value) => {
    if (!value) {
      return (
        <div className={classes.errorMessage}>This field is required!</div>
      );
    }
  };

  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className={classes.errorMessage}>This is not a valid email.</div>
      );
    }
  };

  const vname = (value) => {
    if (value.length < 3 || value.length > 40) {
      return (
        <div className={classes.errorMessage}>
          name must be between 3 and 40 characters.
        </div>
      );
    }
  };

  const vpassword = (value) => {
    if (value.length < 8 || value.length > 40) {
      return (
        <div className={classes.errorMessage}>
          password must be between 8 and 40 characters.
        </div>
      );
    }
  };

  const vpasswordConfirmation = (vpassword) => {
    return (
      !vpassword && (
        <div className={classes.errorMessage}>password does not match.</div>
      )
    );
  };

  const vorganization = (value) => {
    if (value.length < 6 || value.length > 50) {
      return <div>The password must be between 6 and 40 characters.</div>;
    }
  };

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
      dispatch(register(data))
        .then(() => {
          setSuccessful(true);
          window.location.href = '/success';
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
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
          passwordConfirmation={state.passwordConfirmation}
          handleChangePasswordConfirmation={handleChange}
          passwordConfirmationValidation={[required, vpasswordConfirmation]}
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
