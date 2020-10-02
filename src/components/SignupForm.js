import React,{useState,PureComponent} from 'react';
import {Form,TextField,Flex,Checkbox,Link,Button, Grid,Text,Image, View,repeat} from '@adobe/react-spectrum';
import {NavLink} from 'react-router-dom'

const SignupForm = () => {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [organization,setOg] = useState();
    const [selectState1,setSelect1] = useState(false);
    const [selectState2,setSelect2] = useState(false);
    const [selectState3,setSelect3] = useState(false);
    const [selectState4,setSelect4] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    return(
        <Grid columns={repeat(3,'1fr')} rows = '1fr 2fr 1fr'
              height="600px" maxHeight="100%" gap="size-100">
                  
                <View gridColumnStart="2" gridColumnEnd="3" 
                      gridRowStart="2" gridRowEnd="3" borderWidth="thin"
                      borderColor="dark" borderRadius="medium" backgroundColor="static-white" 
                      width="static-size-6000" maxHeight="100%">
                    
                    <Flex direction="column">
                  <Form onSubmit={handleSubmit} width="80%" marginStart="single-line-height" height="50%">

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
                        <TextField isRequired id="textfield" label="Name" type="text" placeholder="Name" width="90%" marginStart="single-line-height" value={name} onChange={setName}/>
                        <TextField isRequired id="textfield" label="Email" type="email"placeholder="Email"  width="90%" marginStart="single-line-height" value={email} onChange={setEmail}/>
                        <TextField isRequired id="textfield" label="Password" type="password"placeholder="Password"  width="90%" marginStart="single-line-height" value={password} onChange={setPassword}/>
                        <TextField  id="textfield" label="Organization" type="text" placeholder="Organization" width="90%" marginStart="single-line-height"value={organization} onChange={setOg}/>
                </Flex>
           
                
                    <Flex direction="column" marginStart="size-600" >
                            <Text>Areas of impact you're interested in</Text>
                            <Checkbox value="#" isSelected={selectState1} onChange={setSelect1}>Exemple</Checkbox>
                            <Checkbox value="#" isSelected={selectState2} onChange={setSelect2}>Exemple</Checkbox>
                            <Checkbox value="#"isSelected={selectState3} onChange={setSelect3}>Exemple</Checkbox>
                            <Checkbox value="#"isSelected={selectState4} onChange={setSelect4}>Exemple</Checkbox>
                    </Flex>          
                
                        <Grid>
                            <Button variant="primary" id="signInButton" type="submit" width="90%" marginStart="single-line-height"> 
                            REGISTER
                        </Button>    
                        </Grid>
          
          
                    
                </Form>

                <Grid>
                        <Text justifySelf="center">
                            Already have an account?
                            <Link isQuiet><NavLink to="/"> Sign in</NavLink></Link>
                        </Text>
                    </Grid>
               </Flex>
              </View>
                  
            </Grid> 
    )
}
export default SignupForm;


// class SignupForm extends PureComponent{
//     render(){
//         return(

//             <Grid columns={repeat(3,'1fr')} rows = '1fr 2fr 1fr'
//               height="600px" maxHeight="100%" gap="size-100">
                  
//                 <View gridColumnStart="2" gridColumnEnd="3" 
//                       gridRowStart="2" gridRowEnd="3" borderWidth="thin"
//                       borderColor="dark" borderRadius="medium" backgroundColor="static-white" 
//                       width="static-size-6000" maxHeight="100%">
                    
//                   <Form width="80%" marginStart="single-line-height" height="80%">

//                         <Flex direction="column" gap="size-65" justifyContent="center" marginStart="single-line-height">
//                             <View  borderWidth="thin"  marginStart="single-line-height" borderColor="dark"  backgroundColor="gray-100"  >
//                             <Image src="#" alt="Sky and roof" height="100%" width="100%"/>
//                             </View>
//                             <Text  marginStart="single-line-height"  >
//                                 Register to view your kits!
//                             </Text>
//                         </Flex>
            

//                     <Flex direction="row" marginStart="size-2000"  gap="size-250">
                    
//                         <Image src="fblogo.png" alt="Sky" width="size-500" height="size-500"/>
//                         <Image src="google.png" alt="Roof" width="size-500" height="size-500"/>
//                     </Flex>

//                     <Flex direction="column">
//                     <Text marginStart="size-2400">or </Text>
//                         <TextField isRequired id="textfield" label="Name" type="text" placeholder="Name" width="90%" marginStart="single-line-height"/>
//                         <TextField isRequired id="textfield" label="Email" type="email"placeholder="Email"  width="90%" marginStart="single-line-height" />
//                         <TextField isRequired id="textfield" label="Password" type="password"placeholder="Password"  width="90%" marginStart="single-line-height" />
//                         <TextField  id="textfield" label="Organization" type="text" placeholder="Organization" width="90%" marginStart="single-line-height"/>
//                 </Flex>
           
                
//                     <Flex direction="column" marginStart="size-600" >
//                             <Text>Areas of impact you're interested in</Text>
//                             <Checkbox value="soccer">Soccer</Checkbox>
//                             <Checkbox value="baseball">Baseball</Checkbox>
//                             <Checkbox value="basketball">Basketball</Checkbox>
//                             <Checkbox value="basketball">Basketball</Checkbox>
//                     </Flex>          
                
//                         <Grid>
//                             <Button variant="primary" id="signInButton" type="submit" width="90%" marginStart="single-line-height"> 
//                             REGISTER
//                         </Button>    
//                         </Grid>
          
          
//                     <Grid>
//                         <Text justifySelf="center">
//                             Already have an account?
//                             <Link isQuiet><a href="#"> Sign in</a></Link>
//                         </Text>
//                     </Grid>
                    
//                 </Form>
                       
//               </View>
                  
//             </Grid> 
            
//         );
//     }
// }
// export default SignupForm;