import React from "react";
import {
  Form,
  Link,
  Button,
  View,
  Flex,
  Header,
  RadioGroup,
  Radio,
  Footer
} from "@adobe/react-spectrum";
import { NavLink } from "react-router-dom";

const SendPasswordReset = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/success";
    };

    return(
        <>
          <Flex
            direction="column"
            width="100%"
            gap="size-100"
            height="100%"
            alignItems="center">

               <View width="size-6000" justifySelf="center" marginTop="size-1250">
                  <Form onSubmit={handleSubmit} marginStart="single-line-height" marginBottom="size-100">
                    <Header><h2>How do you want to reset your password?</h2></Header>
                    <Header><h3>How do you want to reset your password?</h3></Header>
                    <RadioGroup>
                        <Radio value="1">
                        Text a confirmation code to my phone ending in ...
                        </Radio>
                        <Radio value="2">Email a confirmation code to ...</Radio>
                    </RadioGroup>

                    <Button variant="cta" type="submit"  width="size-5000">
                       Continue
                   </Button>

                   <Link isQuiet>
                        <NavLink to="#">I don&#39;t have access to any of these</NavLink>
                    </Link>

                  </Form>
                  <Footer marginStart="size-1700" > Copyright &copy; All rights reserved {new Date().getFullYear()}.</Footer>
               </View>
          </Flex>
        
        
        </>
    );
}

export default SendPasswordReset;