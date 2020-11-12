import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import Theme from '../util/theme';

// React Spectrum Stuff
import {
  Checkbox,
  Link,
  Text,
  View,
  Flex,
} from '@adobe/react-spectrum';
import { NavLink } from 'react-router-dom';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ButtonLogo from '@material-ui/core/Button';
import ButtonSignin from '@material-ui/core/Button';

const styles = makeStyles((theme) => ({
  signinWrapper: {
    boxShadow: '0 0 10px 0 rgba(0,0,0,.4)',
    border: '1px solid #BFBFBF',
    padding: '25px 10px 20px 10px',
    textAlign: 'center',
    borderRadius: '2%',
    marginBottom: '31.5%',
    marginTop: 30,
    paddingLeft: 27,
  },
  form: {
    textAlign: 'center',
    backgroundColor: 'red',
  },

  formInput: {
    padding: 50,
  },
  logo: {
    color: '#4B4B4B',
  },
  logoBtn: {
    // margin: 12,
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: 'blue',
    height: 60,
    width: '1px',
  },
  logoBtn2: {
    margin: 18,
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: 'white',
    height: 60,
    width: '1px',
    padding: 35,
  },
  interest: {
    textAlign: 'left',
    marginLeft: 5,
  },
  exemple: {
    marginLeft: 20,
  },
  signInBtn: {
    backgroundColor: Theme.palette.primary.main,
    borderRadius: '50px',
    border: 1,
    color: '#F5F5F5',
    marginLeft: 10,
    width: '100%',
  },
  dontHaveAnAccount: {
    margin: 'auto auto 20px auto',
  },

  logoImg: {
    backgroundColor: '#C4C4C4',
    width: '40%',
    height: 90,
    marginLeft: '30%',
    marginRigt: '30%',
  },
  loginText: {
    paddingTop: 20,
    fontSize: 40,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  toolkitDescriptionWrapper: {
    margin: '10px auto 10px auto',
    fontSize: 23,
    textAlign: 'center',
  },

  rememberMeAndforgetPassword: {
    display: 'flex',
    marginBottom: '2%',
  },
  rememberMe: {
    width: '50%',
    marginLeft: '2%',
    textAlign: 'left',
  },
  forgetPassword: {
    textAlign: 'right',
    marginRight: '-2%',
    marginTop: '1%',
    width: '48%',
  },
  logginWrapper: {
    marginTop: '10%',
  },
  inputField: {
    color: Theme.palette.secondary.main,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    outline: 'none',
    width: '100%',
    marginBottom: 10,
  },
}));

const login = (props) => {
  const classes = styles();
  return (
    <Grid container className={classes.logginWrapper}>
      <Grid item sm={4} xs={12} className={classes.loginText}>
        <Text>Sign in</Text>
      </Grid>
      <Grid item sm={4} xs={12}>
        <div className={classes.signinWrapper}>
          <Flex direction="column" width="100%" height="100%">
            <div className={classes.logoImg}>logo</div>
            <Text marginTop="size-100">Sign in to view your kits!</Text>
          </Flex>
          <ButtonLogo
            className={classes.logoBtn}
            onClick={() => alert('I was clicked')}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="5x"
              color="white"
            />
          </ButtonLogo>
          <ButtonLogo
            className={classes.logoBtn2}
            onClick={() => alert('I was clicked')}
          >
            <FontAwesomeIcon icon={faGoogle} size="3x" color="#808080" />
          </ButtonLogo>

          <Flex direction="column" width="90%" height="100%">
            <div style={{ marginLeft: '6%', marginBottom: '2%'}}>or</div>
            <View>
              <Form noValidate onSubmit={props.handleSubmit}>
                <input
                  isRequired
                  id="textField"
                  type="email"
                  placeholder="Email*"
                  name="email"
                  value={props.email}
                  height="size-450"
                  onChange={props.handleChangeEmail}
                  className={classes.inputField}
                />

                <input
                  isRequired
                  id="textField"
                  type="password"
                  placeholder="Password*"
                  name="password"
                  value={props.password}
                  height="size-450"
                  onChange={props.handleChangePassword}
                  className={classes.inputField}
                />

                <div
                  direction="row"
                  className={classes.rememberMeAndforgetPassword}
                >
                  <div className={classes.rememberMe}>
                    <Checkbox>Remember me</Checkbox>
                  </div>

                  <div className={classes.forgetPassword}>
                    <Link isQuiet>
                      <NavLink to="/recover_password" paddingLeft="size-1000">
                        {' '}
                        Forgot Password?
                      </NavLink>
                    </Link>
                  </div>
                </div>

                <ButtonSignin type="submit" className={classes.signInBtn}>
                  Sign In
                </ButtonSignin>
              </Form>
            </View>
            <div className={classes.dontHaveAnAccount}>
              <Flex direction="row" marginTop="size-100">
                <Text>
                  Don&#39;t have an account?
                  <Link isQuiet>
                    <NavLink to="/signup"> Register</NavLink>
                  </Link>
                </Text>
              </Flex>
            </div>
          </Flex>
        </div>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default login;
