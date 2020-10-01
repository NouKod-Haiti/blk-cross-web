import React,{PureComponent} from'react';
import {Form,TextField,Checkbox,Link,Button, Grid,Text,Image, View,Flex} from '@adobe/react-spectrum';

class LoginForm extends PureComponent{

    render(){
        return(
         
          <Form width="80%" marginStart="single-line-height" height="80%">
             
              <Flex direction="column" gap="size-65" justifyContent="center" marginStart="single-line-height">
                    <View  borderWidth="thin"  marginStart="single-line-height" borderColor="dark"  backgroundColor="gray-100"  >
                    <Image src="#" alt="Sky and roof" height="100%" width="100%"/>
                    </View>
                    <Text  marginStart="single-line-height"  >
                    Sign in to view your kits!
                    </Text>
                </Flex>

                <Flex direction="row" marginStart="size-2000"  gap="size-250">
               
                    <Image src="fblogo.png" alt="Sky" width="size-500" height="size-500"/>
                    <Image src="google.png" alt="Roof" width="size-500" height="size-500"/>
                </Flex>

                <Flex direction="column">
                  <Text marginStart="size-2400">or </Text>
                  <TextField isRequired id="textfield" label="Email" type="email" placeholder="Email" width="90%" marginStart="single-line-height"/>
                  <TextField isRequired id="textfield" label="Password" type="password"placeholder="Password"  width="90%" marginStart="single-line-height" />
                </Flex>
            
                <Flex direction="row">
                <Checkbox marginStart="single-line-height">Remember me</Checkbox>
                <Link marginStart="size-1200" isQuiet><a href="#" > Forgot Password?</a></Link>
                </Flex>
            
                <Grid> 
                    <Button variant="primary" id="signInButton" type="submit" width="90%" marginStart="single-line-height"> 
                       SIGN IN
                    </Button>
                </Grid>
           
            
                    <Grid>
                        <Text justifySelf="center">
                            Don't have an account?
                            <Link isQuiet><a href="#" > Register</a></Link>
                        </Text>
                    </Grid>
            
         </Form>
         
        );
    }
}
export default LoginForm;