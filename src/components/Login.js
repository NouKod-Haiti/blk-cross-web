import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../screens/login';
import { login } from '../actions/auth';

// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  errorMessage: {
    color: 'red',
    marginTop: -10,
    marginBottom: 5,
    fontSize: 10,
    textAlign: 'left',
    marginLeft: 20,
  },
}));

function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  
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

   const handleChange = (e) => {
     setState({
       ...state,
       [e.target.name]: e.target.value,
     });
   };
    const handleSubmit = async (e) => {
      e.preventDefault();

      setLoading(true);

      const data = {
        email: state.email,
        password: state.password,
      };
      console.log(data);
      form.current.validateAll();

      if (checkBtn.current.context._errors.length === 0) {
          window.location.href = '/advocate';
        // dispatch(login(data))
        //   .then(() => {
        //     console.log('wudlll', data);
        //    window.location.href = '/advocate';
        //     window.location.reload();
        //   })
        //   .catch(() => {
        //     setLoading(false);
        //   });
      } else {
        setLoading(false);
      };
    };
 if (isLoggedIn) {
   return <Redirect to="/advocate" />;
 }
 
    return (
      <>
        <LoginForm
          refForm={form}
          email={state.email}
          emailValidation={[required]}
          handleChangeEmail={handleChange}
          password={state.password}
          passwordValidation={[required]}
          handleChangePassword={handleChange}
          handleSubmit={handleSubmit}
          checkButton={checkBtn}
          // loading={loading}
        />
      </>
    );
};

export default Login;
