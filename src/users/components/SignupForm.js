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

const SignupForm = (props) => {
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
            <h2>Sign up</h2>
          </Header>
          <View>
            <Form onSubmit={props.handleSubmit}>
              <TextField
                isRequired
                id="textfield"
                label="Name"
                type="text"
                placeholder="Name"
                name="name"
                value={props.name}
                onChange={props.handleChangeName}
              />

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
              <TextField
                isRequired
                id="textfield"
                label="Organization"
                type="text"
                placeholder="Organization"
                name="organization"
                value={props.organization}
                onChange={props.handleChangeOrganization}
              />
              <Flex direction="column">
                <Text>Areas of impact you&apos;re interested in</Text>
                <Flex direction="row">
                  <Checkbox value="#">Exemple</Checkbox>
                  <Checkbox value="#">Exemple</Checkbox>
                  <Checkbox value="#">Exemple</Checkbox>
                </Flex>
              </Flex>

              <Button variant="cta" type="submit">
                Register
              </Button>
            </Form>
          </View>
          <Flex direction="row" marginTop="size-100">
            <Text>
              Already have an account?
              <Link isQuiet>
                <NavLink to="/login"> Sign in</NavLink>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </View>
    </Flex>
  );
};

export default SignupForm;
