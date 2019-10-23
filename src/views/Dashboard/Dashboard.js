/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//images
import robert from "assets/img/faces/robertjackman.jpg";
import anne from "assets/img/faces/Anne.jpg";

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import Profile from "views/ProfilePage/ProfilePage.js";
import NewRequestPage from "views/NewRequestPage/NewRequestPage.js";
import ApprovalPage from "views/ApprovalPage/ApprovalPage.js";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

function Dashboard() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("https://apex.oracle.com/pls/apex/myfusion/ot/requests")
      .then(response => response.json())
      .then(data => setRequests(data.items));
  }, []);

  const handleEdit = request => {
    request.status = "Approved";
    let filtered = requests.filter(req => req.id != request.id).concat(request);
    setRequests([...filtered]);
  };

  const handleCreate = request => {
    fetch("https://apex.oracle.com/pls/apex/myfusion/ot/requests", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        firstname: request.firstName,
        lastname: request.lastName,
        hoursrequested: request.hoursRequested,
        justification: request.justification,
        periodstart: request.payPeriodStart
      })
    })
      .then(response => response.json())
      .then(data => {
        setRequests([...requests, data]);
      });
  };

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Teekay"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark"
        }}
      />
      <Parallax
        image={require("assets/img/teekay.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={anne} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Anne Dunsford</h3>
                  <h6>Analyst</h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <div>
            <Route
              path="/my-profile"
              render={() => (
                <Profile requests={requests} setRequests={setRequests} />
              )}
            />

            <Route
              path="/new-request"
              render={() => (
                <NewRequestPage
                  requests={requests}
                  handleCreate={handleCreate}
                />
              )}
            />
            <Route
              path="/approval"
              render={() => (
                <ApprovalPage
                  requests={requests}
                  handleCreate={handleCreate}
                  handleEdit={handleEdit}
                  setRequests={setRequests}
                />
              )}
            />
          </div>

          <Clearfix />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Dashboard);
