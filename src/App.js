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
import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import Dashboard from "views/Dashboard/Dashboard.js";

function App() {
  let hist = createBrowserHistory();

  return (
    <div>
      <Router history={hist}>
        <Switch>
          <Route path="/" component={Dashboard} name="Anne Dunsford" /> />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
