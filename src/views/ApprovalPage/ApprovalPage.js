import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditDialogue from "views/EditDialogue/EditDialogue.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js";

const useStyles = makeStyles(style);

function ApprovalPage(props) {
  const { requests, setRequests, handleEdit } = props;
  console.log(requests);

  const classes = useStyles();

  return (
    <div className="cd-section" id="contentAreas">
      <div id="tables">
        <GridContainer>
          <GridItem
            xs={12}
            sm={10}
            md={8}
            className={classes.mrAuto + " " + classes.mlAuto}
          >
            <h4>Overtime Approval</h4>
            <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Status</TableCell>

                  <TableCell align="center">Hours Requested</TableCell>
                  <TableCell align="center">Justification</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map(item => (
                  <TableRow key={item.id}>
                    <TableCell align="center">{item.status}</TableCell>
                    <TableCell align="right">{item.hoursrequested}</TableCell>
                    <TableCell align="left">{item.justification}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Link to="/my-profile">Home</Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withRouter(ApprovalPage);
