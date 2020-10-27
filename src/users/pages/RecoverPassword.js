import React, { useState } from "react";
import {
  Button,
  Form,
  TextField,
  View,
  Flex,
  Header,
  Footer
} from "@adobe/react-spectrum";

const RecoverPassword = () => {

    const [user, setUser] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
          info: user
      }
      console.log(data);
      window.location.href = "/send_password_reset";
    //connect with API etc
    };

    return(
        <>  
          <Flex
            direction="column"
            width="100%"
            gap="size-100"
            height="100%"
            alignItems="center">

             <View width="size-6000" justifySelf="center" marginTop="size-1600">
                <Form onSubmit={handleSubmit} marginStart="single-line-height" marginBottom="size-100">
                  <Header><h2>Find your Blk account</h2></Header>

                  <TextField isRequired
                    id="textfield"
                    label="Enter your email, phone number or username."
                    type="text"
                    width="size-5000"
                    name="email"
                    value={user}
                    onChange={setUser}
                   />

                 <Button variant="cta" type="submit"  width="size-5000">
                     Search
                 </Button>
                </Form>    
                <Footer marginStart="size-1700" > Copyright &copy; All rights reserved {new Date().getFullYear()}.</Footer>
             </View> 
          </Flex>
        
        </>
    );
}

export default RecoverPassword;