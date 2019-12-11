import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import SettingsIcon from "@material-ui/icons/Settings";
import BuildIcon from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.js";
import Badge from "components/Badge/Badge.js";
import Accordion from "components/Accordion/Accordion.js";

import BrakesBadgePage from "views/BrakesBadgePage/BrakesBadgePage";

const useStyles = makeStyles(pillsStyle);

export default function MyBadgesPage(props) {
  const classes = useStyles();

  // eslint-disable-next-line react/prop-types

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>My Badges</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 3, md: 4 },
                  contentGrid: { xs: 12, sm: 9, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Reefer",
                    tabIcon: BuildIcon,
                    tabContent: (
                      <span>
                        <h3>Reefer</h3>
                        <h4>$1.00/hr Premium</h4>

                        <Badge color="success">Completed</Badge>
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>

                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Brakes",
                    tabIcon: LocalShippingIcon,
                    tabContent: (
                      <span>
                        <h3>Brakes</h3>
                        <h4>$1.50/hr Premium</h4>
                        {props.status == "COM" ? (
                          <Badge color="success">Complete</Badge>
                        ) : (
                          <Badge color="info">In Process</Badge>
                        )}

                        <Accordion
                          activeColor="default"
                          collapses={[
                            {
                              title: "Pit Stop 1: Drivetrain",
                              content:
                                "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                            },
                            {
                              title: "Pit Stop 2: Brakes",
                              content: <BrakesBadgePage />
                            },
                            {
                              title: "Pit Stop 3: Steering/Suspension",
                              content:
                                "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                            },
                            {
                              title: "Pit Stop 4: Wheels/Tires",
                              content:
                                "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                            }
                          ]}
                        />
                      </span>
                    )
                  },
                  {
                    tabButton: "Badge 3",
                    tabIcon: SettingsIcon,
                    tabContent: (
                      <span>
                        <h3>Badge 3</h3>
                        <h4>$0.30/hr Premium</h4>
                        <Badge color="danger">Not Started</Badge>
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>

                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
