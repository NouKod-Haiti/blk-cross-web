import React, { useState } from "react";
import {
  Grid,
  Text,
  Button,
  Form,
  TextField,
  View,
} from "@adobe/react-spectrum";


const RecoverPassword = () => {
  const [user, setUser] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
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
      >
        <Form
          onSubmit={handleSubmit}
          width="100%"
          height="100%"
          marginStart="single-line-height"
        >
          <Text>
            <h1>Find your Blk account</h1>
          </Text>
          <TextField
            isRequired
            id="textfield"
            label="Enter your email, phone number or username."
            type="text"
            width="70%"
            value={user}
            onChange={setUser}
          />
          <Button variant="primary" id="signInButton" type="submit" width="20%">
            Search
          </Button>
        </Form>
      </View>
    </Grid>
  );
};
export default RecoverPassword;
