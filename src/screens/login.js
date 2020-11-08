import React from 'react';
import {
  Form,
  TextField,
  Checkbox,
  Link,
  Button,
  Text,
  View,
  Flex,
  Header,
} from '@adobe/react-spectrum';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginForm = (props) => {
  return (
    <Flex direction="column" width="100%" height="100%">
      <View paddingBottom="size-200">
        <Flex
          direction="column"
          alignItems="center"
          width="100%"
          marginTop="size-200"
        >
          <Header>
            <h2>Sign In</h2>
          </Header>
          <View>
            <Form onSubmit={props.handleSubmit}>
              <TextField
                isRequired
                id="textfield"
                label="Email"
                type="email"
                placeholder="Email"
                name="email"
                value={props.email}
                onChange={props.handleChangeEmail}
              />
              <TextField
                isRequired
                id="textfield"
                label="Password"
                type="password"
                placeholder="Password"
                name="password"
                value={props.password}
                onChange={props.handleChangePassword}
              />

              <Flex direction="row" alignItems="center" justifyContent="center">
                <Checkbox>Remember me</Checkbox>
                <Link isQuiet>
                  <NavLink to="/recover_password"> Forgot Password?</NavLink>
                </Link>
              </Flex>
              <Button variant="cta" type="submit">
                Login
              </Button>
            </Form>
          </View>
          <Flex direction="column" alignItems="center" marginY="size-100">
            <Text>Or login with</Text>
            <Flex direction="row" gap="size-250">
              <Link isQuiet>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faFacebook} size="3x" color="blue" />
                </NavLink>
              </Link>
              <Link isQuiet>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faGoogle} size="3x" color="blue" />
                </NavLink>
              </Link>
            </Flex>
          </Flex>
          <Flex direction="row">
            <Text>
              Don&#39;t have an account?
              <Link isQuiet>
                <NavLink to="/signup"> Register</NavLink>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </View>
    </Flex>
  );
};

export default LoginForm;
