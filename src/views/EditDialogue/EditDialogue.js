import React, { Fragment, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Edit from "@material-ui/icons/Edit";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing(2),
    color: "Black"
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: "red"
    }
  }
}));

const EditDialogue = props => {
  const { onEdit } = props;
  const [open, setOpen] = useState(false);
  const [request, setRequest] = useState(props.request);
  const classes = useStyles();

  const handleChange = () => event => {
    setRequest({
      ...request,
      status: !event.target.value
    });
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <Button simple onClick={() => setOpen(!open)}>
          <Edit className={classes.icon} />
        </Button>
      </div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Overtime Actions</DialogTitle>
        <DialogContent>
          <form>
            <div className="input-group">
              <TextField
                className="input"
                name="firstName"
                value={request.firstName}
                type="text"
                label="First Name"
              />
            </div>
            <div>
              <TextField
                name="lastName"
                value={request.lastName}
                className="input"
                type="text"
                label="Last Name"
              />
            </div>
            <div>
              <TextField
                name="hours"
                value={request.hoursRequested}
                className="input"
                type="number"
                label="Hours Requested"
              />
            </div>
            <div>
              <TextField
                rows="3"
                name="justification"
                value={request.justification}
                className="input"
                type="text"
                label="Justification"
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            color="success"
            onClick={function() {
              onEdit(request);
              setOpen(!open);
            }}
          >
            Approve
          </Button>
          <Button color="danger" onClick={() => setOpen(!open)}>
            Reject
          </Button>
          <Button onClick={() => setOpen(!open)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default EditDialogue;
