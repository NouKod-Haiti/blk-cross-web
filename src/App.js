import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider,defaultTheme,Grid,View,repeat,Checkbox,Flex} from '@adobe/react-spectrum';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Succes from './components/Succes';
import {BrowserRouter as Router,Route,withRouter,Switch,Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider id="provider" theme={defaultTheme} height="100%">
          <Router>
            <>
             <Switch>
               <Route exact path="/" component={LoginForm} />
               <Route path="/signup" component={SignupForm} />
               <Route path="/succes" component={Succes} />
             </Switch>
            </>
          </Router>

      </Provider>
    </div>
  );
}

export default App;
