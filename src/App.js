import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Advocate from './Advocate';

// React Spectrum Stuff
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { View } from '@react-spectrum/view';

// MUI Stuff
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeObject from './util/theme';

// Components
import Navbar from './components/layout/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Succes from './components/Succes';
import RecoverPassword from './components/RecoverPassword';
import PasswordReset from './components/PasswordReset';

// Screens
import publicPage from './screens/publicPage';

const theme = createMuiTheme(themeObject);
function App() {
  return (
    <Provider theme={defaultTheme} height="100%" id="provider">
      <Router>
        <View>
          <MuiThemeProvider theme={theme}>
            <Navbar />
          </MuiThemeProvider>
        </View>

        <div className="container">
          <Switch>
            <Route exact path="/" component={publicPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/success" component={Succes} />
            <Succes />

            <Route exact path="/recover-password" component={RecoverPassword} />

            <Route
              exact
              path="/send-password-reset"
              component={PasswordReset}
            />

            <Route exact path="/advocate" component={Advocate} />

            {/* <Route path="/logout">
                <Redirect to="/" />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
