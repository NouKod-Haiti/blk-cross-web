import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider,defaultTheme,Grid,View,repeat,Checkbox,Flex} from '@adobe/react-spectrum';


import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
function App() {
  return (
    <div className="App">
      <Provider id="provider" theme={defaultTheme} height="100%">
          
           <Grid columns={repeat(3,'1fr')} rows = '1fr 2fr 1fr'
              height="600px" maxHeight="100%" gap="size-100">
                  
                <View gridColumnStart="2" gridColumnEnd="3" 
                      gridRowStart="2" gridRowEnd="3" borderWidth="thin"
                      borderColor="dark" borderRadius="medium" backgroundColor="static-white" 
                      width="static-size-6000" maxHeight="100%">
                        <LoginForm/>
              </View>
                  
            </Grid> 

      </Provider>
    </div>
  );
}

export default App;
