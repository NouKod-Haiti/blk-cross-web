import React,{PureComponent} from 'react';
import {Form,TextField,Flex,Checkbox,Link,Button, Grid,Text,Image, View} from '@adobe/react-spectrum';


class SignupForm extends PureComponent{
    render(){
        return(
            <Form width="80%" marginStart="single-line-height" height="80%">

                <Flex direction="column" gap="size-65" justifyContent="center" marginStart="single-line-height">
                    <View  borderWidth="thin"  marginStart="single-line-height" borderColor="dark"  backgroundColor="gray-100"  >
                    <Image src="#" alt="Sky and roof" height="100%" width="100%"/>
                    </View>
                    <Text  marginStart="single-line-height"  >
                        Register to view your kits!
                    </Text>
                </Flex>
            

            <Flex direction="row" marginStart="size-2000"  gap="size-250">
               
                <Image src="fblogo.png" alt="Sky" width="size-500" height="size-500"/>
                <Image src="google.png" alt="Roof" width="size-500" height="size-500"/>
            </Flex>

            <Flex direction="column">
               <Text marginStart="size-2400">or </Text>
                <TextField isRequired id="textfield" label="Name" type="text" placeholder="Name" width="90%" marginStart="single-line-height"/>
                <TextField isRequired id="textfield" label="Email" type="email"placeholder="Email"  width="90%" marginStart="single-line-height" />
                <TextField isRequired id="textfield" label="Password" type="password"placeholder="Password"  width="90%" marginStart="single-line-height" />
                <TextField  id="textfield" label="Organization" type="text" placeholder="Organization" width="90%" marginStart="single-line-height"/>
          </Flex>
           
                
           <Flex direction="column" marginStart="size-600" >
                <Text>Areas of impact you're interested in</Text>
                <Checkbox value="soccer">Soccer</Checkbox>
                <Checkbox value="baseball">Baseball</Checkbox>
                <Checkbox value="basketball">Basketball</Checkbox>
                <Checkbox value="basketball">Basketball</Checkbox>
           </Flex>          
       
            <Grid>
                <Button variant="primary" id="signInButton" type="submit" width="90%" marginStart="single-line-height"> 
                REGISTER
               </Button>    
            </Grid>
          
          
          <Grid>
              <Text justifySelf="center">
                  Already have an account?
                  <Link isQuiet><a href="#"> Sign in</a></Link>
              </Text>
          </Grid>
          
       </Form>
        );
    }
}
export default SignupForm;