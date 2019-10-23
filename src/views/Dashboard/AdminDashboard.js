/*eslint-disable*/
import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//images
import robert from "assets/img/faces/robertjackman.jpg";
import anne from "assets/img/faces/AnneDunsford.jpg";
import julie from "assets/img/faces/JulieBrown.jpg";

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

function AdminDashboard(props) {
  const { requests, handleCreate, handleEdit } = props;

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
                  <img src={julie} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Julie Brown</h3>
                  <h6>Vice President of HR</h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <div>
            <Route
              path="/admin/my-profile"
              render={() => <Profile requests={requests} />}
            />
          </div>

          <Clearfix />
        </div>
      </div>
    </div>
  );
}

export default withRouter(AdminDashboard);
