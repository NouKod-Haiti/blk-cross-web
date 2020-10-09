import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Succes from "./components/Succes";
import RecoverPassword from "./components/RecoverPassword";
import SendPasswordReset from "./components/SendPassordReset";

function App() {
  return (
    <div className="App">
      <Provider id="provider" theme={defaultTheme} height="100%">
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={LoginForm} />
              <Route path="/signup" component={SignupForm} />
              <Route path="/success" component={Succes} />
              <Route path="/recover_password" component={RecoverPassword} />
              <Route
                path="/send_password_reset"
                component={SendPasswordReset}
              />
            </Switch>
          </>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
