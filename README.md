# Penske Employee Learning Badge PaaS

![version](https://img.shields.io/badge/version-1.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/jkolden/penske.svg?maxAge=2592000)](https://github.com/jkolden/penske/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/jkolden/penske.svg?maxAge=2592000)](https://github.com/jkolden/penske/issues?q=is%3Aissue+is%3Aclosed)

## Objective and Overview

This PaaS example was built to demonstrate how Penske can coordinate and manage employee learning through a series of progressions referred to as "badges". Each badge is comprised of a series of learning courses. As badges are completed, checklists are sent to Oracle HCM so that they can be validated by a supervisor or manager. Upon validation, a pay element is sent to Oracle Payroll to be added to the employee's hourly stipend.

The solution consists of three components:

- a desktop application built with [Oracle Applications Express](https://www.oracle.com/database/technologies/appdev/apex.html). All of the cloud SOAP and REST API's are contained within a PL/SQL package titled penske_pkg.
- A REST API built with [Oracle Rest Data Services](https://www.oracle.com/database/technologies/appdev/rest.html) that serves the data stored in the apex schema to the mobile UI.
- a mobile UI for employees to have visibility into how their hourly rate is calculated, their current learning progression and opportunities for additional learning/stipend increases. The mobile UI was built with [React](https://reactjs.org/) and deployed to the [Oracle Cloud Infrastructure Kubernetes Cluster](https://docs.cloud.oracle.com/iaas/Content/home.htm).

![Product Presentation Image](https://user-images.githubusercontent.com/21246211/70810064-ecd64300-1d77-11ea-89f5-85711316022d.png)

![Mobile UI](https://user-images.githubusercontent.com/21246211/70811285-25771c00-1d7a-11ea-9994-a7cf9e776e36.png)

## Table of Contents

- [Objective](#objective)
- [Integrations](#integrations)
- [Deployment](#deployment)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Integrations

This application uses the following Oracle Cloud ERP and HCM API's:

[![erp](https://img.shields.io/badge/ERPIntegrationService-SOAP-orange.svg?maxAge=2592000&?logo=oracle)](https://docs.oracle.com/en/cloud/saas/financials/18c/oeswf/erp-integration-service-ErpIntegrationService-svc-9.html)
[![api](https://img.shields.io/badge/HCMDataLoader-SOAP-orange.svg?maxAge=2592000)](https://docs.oracle.com/en/solutions/load-data-into-hcm-cloud/use-hcm-data-loader-integration-web-service1.html)
[![checklist](https://img.shields.io/badge/AllocatedChecklists-REST-green.svg?maxAge=2592000)](https://docs.oracle.com/en/cloud/saas/global-human-resources/19b/farws/api-allocated-checklists.html)

## Deployment

- The client application is deployed in a single docker container running on Oracle Cloud Infrastructure Kubernetes Cluster.
- The server application is an apex application running on apex.oracle.com.

## Documentation

The documentation for the Material Kit PRO React is hosted at our [website](https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial).

## How to Run

How to run this application (assumes you have Docker installed locally):

- Clone this repo to a directory on your machine and cd into that directory.
- Run the docker build command to build a development working version:
  - docker build -t <tag, e.g. jkolden/penske> -f Dockerfile.dev . (space and period at the end is important)
  - docker run -p 3000:3000 -v /app/node_modules -v \$(pwd):/app <tag>

## Resources

- Demo: <https://demos.creative-tim.com/material-kit-pro-react/#/components>
- Download Page: <https://www.creative-tim.com/product/material-kit-pro-react>
- Documentation: <https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues)

* [Material Kit Free React](https://demos.creative-tim.com/material-kit-react/#/)
* [Material Kit Free](https://demos.creative-tim.com/material-kit/index.html)
* [Material Dashboard Free React](https://demos.creative-tim.com/material-dashboard-react/#/dashboard)
* [Material Dashboard Pro React](https://demos.creative-tim.com/material-dashboard-pro-react/#/dashboard)
* [Material Dashboard Free HTML](https://demos.creative-tim.com/material-dashboard/examples/dashboard.html)
* [Material Dashboard Pro HTML](https://demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html)
* [Material Dashboard Free Angular](https://demos.creative-tim.com/material-dashboard-angular2/dashboard)
* [Material Dashboard Pro Angular](https://demos.creative-tim.com/material-dashboard-pro-angular2/dashboard)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Material Kit PRO React. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Kit PRO React. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.
