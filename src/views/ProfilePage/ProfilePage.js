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

import office2 from "assets/img/examples/office2.jpg";
import profile_city from "assets/img/examples/profile_city.jpg";

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
              style={{ backgroundImage: `url(${office2})` }}
            >
              <CardBody background>
                <h6 className={classes.cardCategory}>PERSONAL PRODUCTIVITY</h6>
                <Link to="/new-request" style={{ padding: 10 }}>
                  <h3 className={classes.cardTitleWhite}>Request Overtime</h3>
                </Link>
                <p className={classes.cardDescription}>
                  Request new overtime, edit existing unapproved requests and
                  check the status of previously submitted requests.
                </p>
                <Link to="/new-request">
                  <Button round color="danger">
                    <Icon>content_copy</Icon> Make New Request
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card
              raised
              background
              style={{ backgroundImage: `url(${profile_city})` }}
            >
              <CardBody background>
                <h6 className={classes.cardCategory}>MANAGEMENT</h6>
                <Link to="/approval" style={{ padding: 10 }}>
                  <h3
                    className={classes.cardTitleWhite}
                  >{`Manage My Requests (${requests.length})`}</h3>
                </Link>
                <p className={classes.cardDescription}>
                  View, edit and manage my requests and requests submitted by my
                  team.
                </p>
                <Link to="/approval">
                  <Button round color="info">
                    <PageviewIcon />
                    Review
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
