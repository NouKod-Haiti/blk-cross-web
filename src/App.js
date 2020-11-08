import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import './App.css';
import Succes from './users/pages/Succes';
import RecoverPassword from './users/pages/RecoverPassword';
import PasswordReset from './users/pages/PasswordReset';
import Home from './Home';
import Advocate from './Advocate';


// Screens
import signup from './screens/signup';
import login from './screens/login';

function App() {
  return (
    <Provider theme={defaultTheme} height="100%" id="provider">
      <Router>
        <div className="container">
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            {/* <Route exact path="/login">
              <Login />
            </Route> */}
            <Route exact path="/signup" component={signup} />
            <Route exact path="/login" component={login} />

            {/* <Route exact path="/success">
              <Succes />
            </Route>
            <Route exact path="/recover_password">
              <RecoverPassword />
            </Route>
            <Route exact path="/send_password_reset">
              <PasswordReset />
            </Route>
            <Route exact path="/advocate">
              <Advocate />
            </Route> */}
            {/* <Route path="/logout">
                <Redirect to="/" />
            </Route> */}
            {/* <Route path="*">
              <Redirect to="/" />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
