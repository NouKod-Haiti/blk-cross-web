import React from 'react';
import {Flex,Grid,Text,Image,Button} from '@adobe/react-spectrum';
import {NavLink} from 'react-router-dom';

const Succes = () => {
  return(

     <Grid height="600px" width="50%" maxHeight="100%" marginStart="size-5000" marginTop="single-line-height">
           <Flex direction="column" gap="size-100">
            <Text marginStart="single-line-height"><h1>REGISTRATION SUCCES</h1></Text>
            <Text marginStart="single-line-height"><h3>Thanks for registering!</h3></Text>
            <Text marginStart="single-line-height">Your registration will be approved within 24 hours</Text>
            <Image  marginStart="single-line-height"width="50%" src="celebration.png"  borderWidth="thin" borderColor="dark"  backgroundColor="gray-100"  />
            <Button marginStart="single-line-height" variant="primary" id="signInButton" type="submit" width="50%" > 
               BACK TO FULTON COU TY OUTBREACH
            </Button>
        </Flex>
     </Grid>
      
  );
}

export default Succes;