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

const SignupForm = (props) => {
    return(
      <Flex
        direction="column"
        width="100%"
        gap="size-100"
        height="100%"
        alignItems="center"
      >
         
         <View width="size-6000" justifySelf="center" marginTop="size-400">
            <Header marginStart="size-2400"><h2>Sign Up</h2></Header>

            <Form onSubmit={props.handleSubmit} marginStart="single-line-height" marginBottom="size-100">

                <TextField isRequired
                    id="textfield"
                    label="Name"
                    type="text"
                    placeholder="Name"
                    width="size-5000"
                    name="name"
                    value={props.name}
                    onChange={props.handleChangeName}
                   />
                   
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
                    <TextField isRequired
                    id="textfield"
                    label="Organization"
                    type="text"
                    placeholder="Organization"
                    width="size-5000"
                    name="organization"
                    value={props.organization}
                    onChange={props.handleChangeOrganization}
                   />

                    {/* checkbox part not implemented yet */}
                   <Flex direction="column" gap="size-100" >
                     <Text>Areas of impact you&apos;re interested in</Text>
                        <Flex direction="row" gap="size-500">
                          <Checkbox value="#">
                            Exemple 
                          </Checkbox>
                          <Checkbox value="#">
                            Exemple 
                          </Checkbox>
                          <Checkbox value="#">
                            Exemple 
                          </Checkbox>
                        </Flex>
                    
                   </Flex>

                   <Button variant="cta" type="submit" width="size-5000">Register</Button>
                   
            </Form>

           

         <Flex direction="column">
         <Text marginStart="size-1700">
          Already have an account?
          <Link isQuiet>
            <NavLink to="/login"> Sign in</NavLink>
          </Link>
        </Text>
         </Flex>

         <Footer marginStart="size-1700" marginTop="size-100"> Copyright &copy; All rights reserved {new Date().getFullYear()}.</Footer>

         </View>
      </Flex>
    )
}

export default SignupForm;