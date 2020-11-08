import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

// React Spectrum Stuff
import {
  Form,
  TextField,
  Checkbox,
  Link,
  Text,
  View,
  Flex,
} from '@adobe/react-spectrum';
import { NavLink } from 'react-router-dom';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import ButtonLogo from '@material-ui/core/Button';
import ButtonRegister from '@material-ui/core/Button';

const styles = makeStyles((theme) => ({
  // ...theme.palette.primary,
  // ...theme.palette.secondary,

  signupWrapper: {
    boxShadow: '0 0 10px 0 rgba(0,0,0,.4)',
    border: '1px solid #BFBFBF',
    padding: '25px 10px 20px 10px',
    textAlign: 'center',
    borderRadius: '2%',
  },
  form: {
    textAlign: 'center',
  },

  formInput: {
    padding: 50,
  },
  logo: {
    color: '#4B4B4B',
  },
  logoBtn: {
    margin: 12,
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: 'blue',
    height: 60,
    width: '1px',
  },
  logoBtn2: {
    margin: 12,
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
  registerBtn: {
    backgroundColor: '#333333',
    borderRadius: '50px',
    border: 1,
    color: '#F5F5F5',
  },
  haveAnAccount: {
    margin: 'auto',
  },

  logoImg: {
    backgroundColor: '#C4C4C4',
    width: '40%',
    height: 90,
    margin: 'auto',
  },
  registrationText: {
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
}));

const signup = (props) => {
  const classes = styles();
  return (
    <>
      <Grid container>
        <Grid item sm />
        <Grid item sm={6} xs={12} className={classes.toolkitDescriptionWrapper}>
          <Text
            paddingLeft="size-300"
            className={classes.toolkitDescriptionText}
          >
            {' '}
            Toolkit download content ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
            ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
          </Text>
        </Grid>
        <Grid item sm />
      </Grid>
      <Grid container>
        <Grid item sm={4} xs={12} className={classes.registrationText}>
          <Text>Registration</Text>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.signupWrapper}>
            <Flex direction="column" width="100%" height="100%">
              <div className={classes.logoImg}>logo</div>
              <Text marginTop="size-100">Register for your kits!</Text>
            </Flex>
            <ButtonLogo
              className={classes.logoBtn}
              onClick={() => alert('I was clicked')}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="5x"
                color="white"
                padding="-1"
              />
            </ButtonLogo>
            <ButtonLogo
              className={classes.logoBtn2}
              onClick={() => alert('I was clicked')}
            >
              <FontAwesomeIcon icon={faGoogle} size="3x" color="#808080" />
            </ButtonLogo>

            <Flex direction="column" width="100%" height="100%">
              <Text marginBottom="size-300">or</Text>
              <View>
                <Form noValidate onSubmit={props.handleSubmit}>
                  <TextField
                    isRequired
                    id="textField"
                    label=""
                    type="text"
                    placeholder="Name*"
                    name="name"
                    value={props.name}
                    onChange={props.handleChangeName}
                    font-size="size-450"
                    height="size-450"
                  />

                  <TextField
                    isRequired
                    id="textField"
                    type="email"
                    placeholder="Email*"
                    name="email"
                    value={props.email}
                    height="size-450"
                    onChange={props.handleChangeEmail}
                  />

                  <TextField
                    isRequired
                    id="textField"
                    type="password"
                    placeholder="Password*"
                    name="password"
                    value={props.password}
                    height="size-450"
                    onChange={props.handleChangePassword}
                  />
                  <TextField
                    isRequired
                    id="textField"
                    type="text"
                    placeholder="Name Of Organization"
                    name="organization"
                    value={props.organization}
                    height="size-450"
                    onChange={props.handleChangeOrganization}
                  />
                  <div className={classes.interest}>
                    <Flex direction="column">
                      <Text>Areas of impact you&apos;re interested in</Text>
                      <div className={classes.exemple}>
                        <Flex direction="column">
                          <Checkbox value="#">Exemple</Checkbox>
                          <Checkbox value="#">Exemple</Checkbox>
                          <Checkbox value="#">Exemple</Checkbox>
                        </Flex>
                      </div>
                    </Flex>
                  </div>

                  <ButtonRegister type="submit" className={classes.registerBtn}>
                    Register
                  </ButtonRegister>
                </Form>
              </View>
              <div className={classes.haveAnAccount}>
                <Flex direction="row" marginTop="size-100">
                  <Text>
                    Already have an account?
                    <Link isQuiet>
                      <NavLink to="/login"> Sign in</NavLink>
                    </Link>
                  </Text>
                </Flex>
              </div>
            </Flex>
          </div>
        </Grid>
        <Grid item sm />
      </Grid>
    </>
  );
};

export default withStyles(styles)(signup);
