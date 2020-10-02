import React,{useState,PureComponent} from'react';
import {Form,TextField,Checkbox,Link,Button, Grid,Text,Image, View,Flex,repeat} from '@adobe/react-spectrum';
import {NavLink} from 'react-router-dom';

const LoginForm = () => {

  
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [selectState,setSelect] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    return(

        <Grid columns={repeat(3,'1fr')} rows = '1fr 2fr 1fr' height="600px" maxHeight="100%" gap="size-100">
                              
            <View gridColumnStart="2" gridColumnEnd="3" gridRowStart="2" gridRowEnd="3" borderWidth="thin"
                borderColor="dark" borderRadius="medium" backgroundColor="static-white" 
                width="static-size-6000" maxHeight="100%">

            <Flex direction="column">
                    
               <Form onSubmit={handleSubmit} width="80%" marginStart="single-line-height" height="80%">
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
    
                    <TextField isRequired id="textfield" label="Email" type="email" placeholder="Email" width="90%" marginStart="single-line-height" value={email} onChange={setEmail}/>
                    <TextField isRequired id="textfield"  label="Password" type="password"placeholder="Password"  width="90%" marginStart="single-line-height" value={password} onChange={setPassword}/>
                </Flex>                
                                        
                <Flex direction="row">
                  <Checkbox marginStart="single-line-height" value={selectState} isSelected={selectState} onChange={setSelect}>
                      Remember me
                 </Checkbox>
                  <Link marginStart="size-1200" isQuiet><NavLink to=""> Forgot Password?</NavLink></Link>
                </Flex>
                                        
                <Grid> 
                    <Button variant="primary" id="signInButton" type="submit" width="90%" marginStart="single-line-height"> 
                         SIGN IN
                    </Button>
                </Grid>
                                        
            </Form>   

                  <Grid>
                     <Text justifySelf="center">
                          Don't have an account?
                        <Link isQuiet><NavLink to="/signup" > Register</NavLink></Link>
                    </Text>
                 </Grid>
                </Flex>
                                   
            </View>
                              
          </Grid> 
                     
                      
                     
    );
       
    
}
export default LoginForm;


// class LoginForm extends PureComponent {
//     // handleChangeEmail = (event) => {
//     //     this.setState({
//     //         email: event.target.value,
//     //     });
//     // }
   

//     render(){
//         return(

//             <Grid columns={repeat(3,'1fr')} rows = '1fr 2fr 1fr'
//               height="600px" maxHeight="100%" gap="size-100">
                  
//                 <View gridColumnStart="2" gridColumnEnd="3" 
//                       gridRowStart="2" gridRowEnd="3" borderWidth="thin"
//                       borderColor="dark" borderRadius="medium" backgroundColor="static-white" 
//                       width="static-size-6000" maxHeight="100%">

//                   <Form width="80%" marginStart="single-line-height" height="80%">
                                
//                        <Flex direction="column" gap="size-65" justifyContent="center" marginStart="single-line-height">
//                             <View  borderWidth="thin"  marginStart="single-line-height" borderColor="dark"  backgroundColor="gray-100"  >
//                                 <Image src="#" alt="Sky and roof" height="100%" width="100%"/>
//                             </View>
//                              <Text  marginStart="single-line-height"  >
//                                     Sign in to view your kits!
//                             </Text>
//                         </Flex>

//                         <Flex direction="row" marginStart="size-2000"  gap="size-250">
                                
//                            <Image src="fblogo.png" alt="Sky" width="size-500" height="size-500"/>
//                            <Image src="google.png" alt="Roof" width="size-500" height="size-500"/>
//                         </Flex>

//                         <Flex direction="column">
//                            <Text marginStart="size-2400">or </Text>
//                            <TextField isRequired id="textfield" label="Email" type="email" placeholder="Email" width="90%" marginStart="single-line-height" value={this.state.email}/>
//                             <TextField isRequired id="textfield"  label="Password" type="password"placeholder="Password"  width="90%" marginStart="single-line-height" value={this.state.password}/>
//                         </Flex>
                            
//                         <Flex direction="row">
//                             <Checkbox marginStart="single-line-height">Remember me</Checkbox>
//                             <Link marginStart="size-1200" isQuiet><a href="#" > Forgot Password?</a></Link>
//                         </Flex>
                            
//                         <Grid> 
//                             <Button variant="primary" id="signInButton" type="submit" width="90%" marginStart="single-line-height"> 
//                                 SIGN IN
//                             </Button>
//                         </Grid>
                            
                            
//                         <Grid>
//                           <Text justifySelf="center">
//                              Don't have an account?
//                           <Link isQuiet><a href="#" > Register</a></Link>
//                           </Text>
//                         </Grid>
                            
//                  </Form>   
                       
//               </View>
                  
//             </Grid> 
         
          
         
//         );
//     }
// }
// export default LoginForm;