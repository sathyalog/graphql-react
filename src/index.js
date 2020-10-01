import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";

const Root = () => (
<Router>
    <React.Fragment>
    <Navbar/>
    <Switch>
        <Route component={App} exact path='/'/>
        <Route component={Signin} exact path='/signin'/>
        <Route component={Signup} exact path='/signup'/>
        <Route component={Checkout} exact path='/checkout'/>
    </Switch>
    </React.Fragment>
</Router>

);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
