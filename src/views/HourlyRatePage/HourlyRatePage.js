import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/pricingStyle.js";
import DetailCalc from "./DetailCalc.js";

import city from "assets/img/examples/city.jpg";

const useStyles = makeStyles(pricingStyle);

export default function HourlyRatePage(props) {
  const classes = useStyles();
  return (
    <div className="cd-section">
      <div
        className={classes.pricing + " " + classes.section}
        style={{ backgroundImage: `url(${city})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>
                How your hourly rate is calculated
              </h2>
              <h5 className={classes.description}>
                If you have questions about your current hourly rate please
                contact the Payroll Department or your manager.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} />
            <GridItem xs={12} sm={4} md={4} className={classes.mrAuto}>
              <Card pricing color="success">
                <CardBody pricing>
                  <h6
                    className={
                      classes.cardCategory + " " + classes.marginBottom30
                    }
                  >
                    My Hourly Rate
                  </h6>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small>
                    {props.status == "COM" ? "28.00" : "26.50"}
                    <small>/hr</small>
                  </h1>
                  <DetailCalc status={props.status} />
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="white" round>
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Pricing 3 END */}
      {/* Pricing 4 START */}
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Additional Pay Opportunities</h2>
              <h5 className={classes.description}>
                You can add to your pay by completing the following badges:
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <Card pricing>
                <CardBody pricing plain>
                  <h3 className={classes.cardCategory}>Brakes Badge</h3>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 1.00/hr
                  </h1>
                  <ul>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Drive Train
                    </li>
                    <li>
                      <Danger>
                        <Close />
                      </Danger>{" "}
                      Brakes
                    </li>
                    <li>
                      <Danger>
                        <Close />
                      </Danger>{" "}
                      Steering
                    </li>
                    <li>
                      <Danger>
                        <Close />
                      </Danger>{" "}
                      Wheels/Tire
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="danger" round>
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <Card pricing>
                <CardBody pricing plain>
                  <h3 className={classes.cardCategory}>Engine Badge</h3>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 2.00/hr
                  </h1>
                  <ul>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Engine
                    </li>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Fuel
                    </li>
                    <li>
                      <Danger>
                        <Close />
                      </Danger>{" "}
                      Cooling
                    </li>
                    <li>
                      <Danger>
                        <Close />
                      </Danger>{" "}
                      Air
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="danger" round>
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Pricing 4 END */}
      {/* Pricing 5 START */}

      {/* Pricing 5 END */}
    </div>
  );
}
