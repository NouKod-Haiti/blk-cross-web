import React, { useState } from "react";
import {
  Form,
  TextField,
  Checkbox,
  Link,
  Button,
  Grid,
  Text,
  Image,
  View,
  Flex,
  repeat,
} from "@adobe/react-spectrum";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectState, setSelect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
    window.location.href = "/success";
  }

  return (
    <Grid
      columns={repeat(3, "1fr")}
      rows="1fr 2fr 1fr"
      height="600px"
      maxHeight="100%"
      gap="size-100"
    >
      <View
        gridColumnStart="2"
        gridColumnEnd="3"
        gridRowStart="2"
        gridRowEnd="3"
        borderWidth="thin"
        borderColor="dark"
        borderRadius="medium"
        backgroundColor="static-white"
        width="static-size-6000"
        maxHeight="100%"
      >
        <Flex direction="column">
          <Form
            onSubmit={handleSubmit}
            width="80%"
            marginStart="single-line-height"
            height="80%"
          >
            <Flex
              direction="column"
              gap="size-65"
              justifyContent="center"
              marginStart="size-1600"
            >
              <View
                borderWidth="thin"
                borderColor="dark"
                backgroundColor="gray-100"
                height="101px"
                width="185px"
                marginTop="size-150"
              >
                <Image
                  src="rectangle.png"
                  alt="Sky and roof"
                  height="100%"
                  width="100%"
                />
              </View>
              <Text>Sign in to view your kits!</Text>
            </Flex>

            <Flex direction="row" marginStart="size-2000" gap="size-250">
              <Link isQuiet>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faFacebook} size="3x" color="gray" />
                </NavLink>
              </Link>
              <Link isQuiet>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faGoogle} size="3x" color="gray" />
                </NavLink>
              </Link>
            </Flex>

            <Flex direction="column">
              <Text marginStart="size-2400">or </Text>

              <TextField
                isRequired
                id="textfield"
                label="Email"
                type="email"
                placeholder="Email"
                width="90%"
                marginStart="single-line-height"
                value={email}
                onChange={setEmail}
              />
              <TextField
                isRequired
                id="textfield"
                label="Password"
                type="password"
                placeholder="Password"
                width="90%"
                marginStart="single-line-height"
                value={password}
                onChange={setPassword}
              />
            </Flex>

            <Flex direction="row">
              <Checkbox
                marginStart="single-line-height"
                value={selectState}
                isSelected={selectState}
                onChange={setSelect}
              >
                Remember me
              </Checkbox>
              <Link marginStart="size-1200" isQuiet>
                <NavLink to="/recover_password"> Forgot Password?</NavLink>
              </Link>
            </Flex>

            <Grid>
              <Button
                variant="primary"
                id="signInButton"
                type="submit"
                width="90%"
                marginStart="single-line-height"
              >
                SIGN IN
              </Button>
            </Grid>
          </Form>

          <Grid>
            <Text justifySelf="center">
              Don&#39;t have an account?
              <Link isQuiet>
                <NavLink to="/signup"> Register</NavLink>
              </Link>
            </Text>
          </Grid>
        </Flex>
      </View>
    </Grid>
  );
};
export default LoginForm;
