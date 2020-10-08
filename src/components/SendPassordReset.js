import React from "react";
import {
  Form,
  Link,
  Button,
  Grid,
  Text,
  View,
  RadioGroup,
  Radio,
} from "@adobe/react-spectrum";
import { NavLink } from "react-router-dom";

const SendPasswordReset = () => {
  return (
    <Grid columns="1fr 2fr 1fr" rows="1fr 2fr" width="100%" height="100%">
      <View
        gridColumnStart="1"
        gridColumnEnd="4"
        gridRowStart="1"
        gridRowEnd="2"
        borderWidth="thin"
        borderColor="dark"
        height="70px"
        padding="size-160"
      >
        <View width="50%" marginStart="size-3600">
          <Text>
            <h3>Password Reset</h3>
          </Text>
        </View>
      </View>

      <View
        gridColumnStart="2"
        gridColumnEnd="3"
        gridRowStart="2"
        gridRowEnd="3"
        height="100%"
        width="100%"
        paddingBottom="single-line-height"
      >
        <Form width="100%" height="100%" marginStart="single-line-height">
          <Text>
            <h1>How do you want to reset your password?</h1>
          </Text>
          <Text>
            <h3>
              We found the following information associated with yout account
            </h3>
          </Text>
          <RadioGroup>
            <Radio value="1">
              Text a confirmation code to my phone ending in ...
            </Radio>
            <Radio value="2">Email a confirmation code to ...</Radio>
          </RadioGroup>

          <Button variant="primary" id="signInButton" type="submit" width="40%">
            Continue
          </Button>

          <Link isQuiet>
            <NavLink to="#">I don&eapos;t have access to any oh these</NavLink>
          </Link>
        </Form>
      </View>
    </Grid>
  );
};
export default SendPasswordReset;
