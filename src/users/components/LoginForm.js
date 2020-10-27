import React from "react";
import {
  Form,
  TextField,
  Checkbox,
  Link,
  Button,
  Text,
  View,
  Flex,
  Footer,
  Header
} from "@adobe/react-spectrum";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginForm = (props) => {
  return (
    <Flex
      direction="column"
      width="100%"
      gap="size-100"
      height="100%"
      alignItems="center"
    >
      <View width="size-6000" justifySelf="center" marginTop="size-800">
        <Header marginStart="size-2400"><h2>Sign In</h2></Header>
        <Form marginStart="single-line-height" marginBottom="size-100" onSubmit={props.handleSubmit}>
          <TextField isRequired
            id="textfield"
            label="Email"
            type="email"
            placeholder="Email"
            width="size-5000"
            name="email"
            value={props.email}
            onChange={props.handleChangeEmail}
        />
          <TextField isRequired
            id="textfield"
            label="Password"
            type="password"
            placeholder="Password"
            width="size-5000"
            name="password"
            value={props.password}
            onChange={props.handleChangePassword}
        />
          <Flex direction="row">
             <Checkbox >Remember me</Checkbox>
            <Link isQuiet marginStart="size-1700"  position="relative" top="size-75">
              <NavLink to="/recover_password"> Forgot Password?</NavLink>
            </Link>
          </Flex>
          <Button variant="cta" type="submit" width="size-5000">Login</Button>

        </Form>

         <Flex direction="column" gap="size-130" marginTop="size-400" marginBottom="size-400">
            <Text marginStart="size-2400">Or login with</Text>

            <Flex direction="row" marginStart="size-2400" gap="size-250">

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
         
         <Flex direction="column">
         <Text marginStart="size-1700">
          Don&#39;t have an account?
          <Link isQuiet>
            <NavLink to="/signup"> Register</NavLink>
          </Link>
        </Text>
         </Flex>
       

        <Footer marginStart="size-1700" marginTop="size-100"> Copyright &copy; All rights reserved {new Date().getFullYear()}.</Footer>
     </View>
    </Flex>
  );
};

export default LoginForm;
