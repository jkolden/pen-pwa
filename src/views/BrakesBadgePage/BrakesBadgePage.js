import React from "react";
import Badge from "components/Badge/Badge.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

import { makeStyles } from "@material-ui/core/styles";

import typographyStyle from "assets/jss/material-kit-pro-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(typographyStyle);

export default function BrakesBadgePage(props) {
  const classes = useStyles();
  const linkStyle = {
    color: "rgb(0,0,153)",
    "font-weight": "bold"
  };

  return (
    <div>
      <a
        style={linkStyle}
        target="_blank"
        href="https://ucf3-zwnp-fa-ext.oracledemos.com/hcmUI/faces/deeplink?objType=WLF_LEARN_LEARNING_ITEM&action=NONE&objKey=learningItemId%3D300000223561634"
      >
        Go To Learning >>
      </a>
      <h4 className={classes.title}>Training Group</h4>
      <Badge>Lining</Badge>
      <Badge>Air Dryer</Badge>
      <Badge>Pads</Badge>
      <h4 className={classes.title}>Earned Upon Completion</h4>

      <p className={classes.title}>Licenses/Certifications</p>
      <ul>
        <li>1st Class Two-Wheeled Car Mechanic</li>
      </ul>

      <p className={classes.title}>Competencies</p>
      <span>Brakes </span>
      {props.status == "COM" ? (
        <CustomLinearProgress
          variant="determinate"
          color="success"
          value={100}
        />
      ) : (
        <CustomLinearProgress
          variant="determinate"
          color="warning"
          value={60}
        />
      )}
      <p className={classes.title}>Ready for Assignment</p>
      <ul>
        <li>Replace Clutch Brake</li>
      </ul>
    </div>
  );
}
