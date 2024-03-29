/*!

=========================================================
* Material Kit PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
//import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";

// pages for this product
import Dashboard from "views/Dashboard/Dashboard.js";

function App() {
  let hist = createBrowserHistory();

  return (
    <div>
      <Router history={hist}>
        <Switch>
          <Route path="/about-us" component={AboutUsPage} />
          <Redirect from="/" exact to="/my-profile" />
          <Route path="/" component={Dashboard} name="Kyle Church" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
