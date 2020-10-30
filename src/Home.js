import React,{PureComponent} from 'react';
import {
    Button,
    Form,
    TextField,
    View,
    Flex,
    Header,
    Well,
    Footer,
    Text,
    Content
  } from "@adobe/react-spectrum";

 class Home extends PureComponent{
     render(){
         return(
            <Flex direction="column" width="100%"  height="100%">
             
              <View  marginTop="size-100" minWidth="size-6000"
                  borderWidth="thin"
                  borderColor="dark"
                  borderRadius="medium">

                 <Flex direction="column" alignItems="center">
                  <Header><h2>Fulton County Covid-19 Outreach</h2></Header>
                  <View width="60%" borderWidth="thin"
                  borderColor="dark"
                  borderRadius="medium">
                  <Text>about/overview tattooed fanny pack iPhone biodiesel subway tile. 
                  description ipsum ipsum ipsum ipsum ipsum ipsum.description ipsum ipsum ipsum ipsum ipsum ipsum.</Text>
                  </View>
                </Flex>

                 <Flex direction="column" marginTop="size-600" >
                    <Header marginStart="size-1200"><b>Help spread the word</b></Header>
                    <Text marginStart="size-1200">Copy description ipsum ipsum ipsum ipsum ipsum ipsum.</Text>
                    
                    <Flex direction="row" gap="size-600" marginX="size-2000" wrap="wrap">
                        <View width="size-2000"  height="size-2000" 
                            borderWidth="thin"
                            borderColor="dark"
                            borderRadius="medium"
                            backgroundColor="gray-400">

                        </View>
                        <View width="size-2000"   height="size-2000" 
                            borderWidth="thin"
                            borderColor="dark"
                            borderRadius="medium"
                            backgroundColor="gray-400">

                        </View>
                        <View width="size-2000"  height="size-2000" 
                            borderWidth="thin"
                            borderColor="dark"
                            borderRadius="medium"
                            backgroundColor="gray-400">

                        </View>

                        <View width="size-2000"  height="size-2000" 
                            borderWidth="thin"
                            borderColor="dark"
                            borderRadius="medium"
                            backgroundColor="gray-400">

                        </View>
                    </Flex>
                 </Flex>

               </View>
               
        </Flex>
         )
     }
 }

 export default Home;