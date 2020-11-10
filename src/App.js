import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import advocate from './screens/advocate';

// React Spectrum Stuff
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { View } from '@react-spectrum/view';

// MUI Stuff
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeObject from './util/theme';

// Components
import Navbar from './components/layout/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Succes from './screens/succes';
import Footer from './components/layout/Footer';
import RecoverPassword from './screens/recoverPassword';
import PasswordReset from './screens/passwordReset';

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
            <Route exact path="/recover-password" component={RecoverPassword} />
            <Route exact path="/send-password-reset" component={PasswordReset} />
            <Route exact path="/advocate" component={advocate} />

            {/* <Route path="/logout">
                <Redirect to="/" />
            </Route> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
