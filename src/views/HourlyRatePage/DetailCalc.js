import React, { Fragment } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360
  }
}));

export default function DetailCalc(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <List>
        <ListItem>
          <ListItemText id="base-pay" primary="Base Pay" />
          <ListItemText id="base-pay-val" primary="$24.00/hr" />
        </ListItem>
      </List>
      <List
        subheader={<ListSubheader>Current Roles</ListSubheader>}
        className={classes.root}
      >
        <ListItem>
          <ListItemText id="switch-list-label-wifi" primary="Lead" />
          <ListItemText id="1" primary="$1.00/hr" />
          <ListItemSecondaryAction>
            <Switch
              color="primary"
              edge="end"
              checked={true}
              inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText id="mobile" primary="Mobile" />
          <ListItemText id="mobile-rate" primary="$1.50/hr" />
          <ListItemSecondaryAction>
            <Switch
              color="primary"
              edge="end"
              checked={true}
              inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        {props.status == "COM" ? (
          <ListItem>
            <ListItemText id="brakes" primary="Brakes" />
            <ListItemText id="brakes-rate" primary="$1.50/hr" />
            <ListItemSecondaryAction>
              <Switch
                color="primary"
                edge="end"
                checked={true}
                inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ) : null}
      </List>
    </Fragment>
  );
}
