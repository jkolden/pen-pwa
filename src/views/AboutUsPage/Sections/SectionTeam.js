import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import FaceJen from "assets/img/faces/jen.jpg";
import FaceChristian from "assets/img/faces/christian.jpg";
import FaceJohn from "assets/img/faces/john.png";
import FaceDorothy from "assets/img/faces/dorothy.jpg";

import FaceAvatar from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Our Team</h2>
          <h5 className={classes.description}>
            The Demo Engineering and Proposals Solution Engineering team enables
            our customers (the Pillar Solution Engineer teams) to modernize how
            they sell Oracle solutions. We provide consistent and repeatable
            world class deliverables through product expertise coupled with
            innovative approaches and thought leadership. We set the standard of
            operational excellence for Oracle. Our team is valued and viewed as
            trusted partners, we hold ourselves accountable to our commitments
            and we foster a culture of collaboration to ensure our customers
            ongoing success.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceDorothy}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Dorothy Holstein Wallmann</h4>
              <h6 className={classes.textMuted}>Manager</h6>
              <p className={classes.cardDescription}>
                Leader of the Demo Engineering HCM team driving customer success
                for Oracle’s North American Applications organization.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={FaceJen} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Jennifer Crabb</h4>
              <h6 className={classes.textMuted}>DESIGNER</h6>
              <p className={classes.cardDescription}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation. And I love you like Kanye loves Kanye.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
              <Button href="#pablo" justIcon simple color="linkedin">
                <i className="fab fa-linkedin-in" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={FaceJohn} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>John Kolden</h4>
              <h6 className={classes.textMuted}>Developer</h6>
              <p className={classes.cardDescription}>
                I build SaaS extensions for ERP and HCM demos that utilize
                various web services and API's to integrate to Oracle's Cloud
                applications.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
