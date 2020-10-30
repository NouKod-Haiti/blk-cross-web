import React from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import "./App.css";
import Login from "./users/pages/Login";
import Signup  from "./users/pages/Signup";
import Succes from "./users/pages/Succes";
import RecoverPassword from "./users/pages/RecoverPassword";
import PasswordReset from "./users/pages/PasswordReset";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Provider theme={defaultTheme} height="100%" id="provider">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/success">
              <Succes />
            </Route>
            <Route exact path="/recover_password"> 
              <RecoverPassword />
            </Route>
            <Route exact path="/send_password_reset">
               <PasswordReset />
            </Route>
            {/* <Route path="/logout">
                <Redirect to="/" />
            </Route> */}
            <Route path="*">
               <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
