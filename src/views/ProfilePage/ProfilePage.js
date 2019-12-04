/* eslint-disable */
import React, { useState, useEffect } from "react";
// @material-ui/core components
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PageviewIcon from "@material-ui/icons/Pageview";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

import office2 from "assets/img/office2.jpg";
import penske_treeline from "assets/img/penske_treeline.jpg";
import penske_truck from "assets/img/penske_truck.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function Profile(props) {
  const { requests, setRequests } = props;
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card
              raised
              background
              style={{ backgroundImage: `url(${penske_treeline})` }}
            >
              <CardBody background>
                <h6 className={classes.cardCategory}>PTO Days Remaining</h6>
                <Link to="/new-request" style={{ padding: 10 }}>
                  <h2 className={classes.cardTitleWhite}>5</h2>
                </Link>
                <p className={classes.cardDescription}>
                  View current vacation usage and balance.
                </p>
                <Link to="/new-request">
                  <Button round color="success">
                    <Icon>content_copy</Icon> View Details
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card
              raised
              background
              style={{ backgroundImage: `url(${penske_truck})` }}
            >
              <CardBody background>
                <h6 className={classes.cardCategory}>CURRENT HOURLY RATE</h6>
                <Link to="/my-hourly-rate" style={{ padding: 10 }}>
                  <h2 className={classes.cardTitleWhite}>$26.50</h2>
                </Link>
                <p className={classes.cardDescription}>
                  View current hourly rate calculation.
                </p>
                <Link to="/my-hourly-rate">
                  <Button round color="info">
                    <PageviewIcon />
                    View Details
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </React.Fragment>
  );
}
