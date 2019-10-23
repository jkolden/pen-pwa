import React, { useState } from "react";
// react components used to create a google map

import { Link, withRouter } from "react-router-dom";

import DateFnsUtils from "@date-io/date-fns";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";

const useStyles = makeStyles(contactsStyle);

function NewRequestPage(props) {
  const date = new Date();
  const { requests, handleCreate } = props;

  const [request, setRequest] = useState({
    firstName: "Anne",
    lastName: "Dunsford",
    payPeriodStart: date,
    hoursRequested: 0,
    justification: ""
  });
  const classes = useStyles();

  const handleChange = name => event => {
    setRequest({
      ...request,
      [name]: event.target.value
    });
  };

  const handleDateChange = name => event => {
    setRequest({
      ...request,
      [name]: event
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleCreate(request);
    props.history.push("/my-profile");
  }

  return (
    <div className="cd-section">
      <div>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.mlAuto}>
              <Card className={classes.card1}>
                <form onSubmit={handleSubmit}>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            onChange={handleDateChange("payPeriodStart")}
                            margin="normal"
                            name="payPeriodStart"
                            id="date-picker-dialog"
                            label="Pay Period Start"
                            format="MM/dd/yyyy"
                            value={request.payPeriodStart}
                            KeyboardButtonProps={{
                              "aria-label": "change date"
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </GridItem>
                      <GridItem xs={4} sm={6} md={4}>
                        <CustomInput
                          onChange={handleChange("firstName")}
                          value={request.firstName}
                          labelText="First Name"
                          name="firstName"
                          id="first"
                          inputProps={{
                            value: request.firstName
                          }}
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={4} sm={6} md={4}>
                        <CustomInput
                          onChange={handleChange("lastName")}
                          labelText="Last Name"
                          name="lastName"
                          id="last"
                          inputProps={{
                            value: request.lastName
                          }}
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={4} sm={6} md={4}>
                        <CustomInput
                          value={request.hoursRequested}
                          labelText="Hours Requested"
                          name="hoursRequested"
                          id="ot-request"
                          inputProps={{
                            value: request.hoursRequested,
                            type: "number",
                            onChange: handleChange("hoursRequested")
                          }}
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          value={request.justification}
                          labelText="Overtime Justification"
                          name="justification"
                          id="message"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 3,
                            value: request.justification,
                            onChange: handleChange("justification")
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <Button
                      onClick={e => handleSubmit(e)}
                      color="info"
                      className={classes.pullRight}
                    >
                      Submit Request
                    </Button>

                    <Link
                      to="/my-profile"
                      style={{ padding: 10, color: "black" }}
                    >
                      Cancel
                    </Link>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Contact us 1 END */}
      {/* Contact us 2 START */}
      <div className={classes.contacts2}>
        <div className={classes.map}></div>
      </div>
      {/* Contact us 2 END */}
    </div>
  );
}

export default withRouter(NewRequestPage);
