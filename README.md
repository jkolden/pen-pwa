# Penske Employee Learning Badge PaaS

![version](https://img.shields.io/badge/version-1.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/jkolden/penske.svg?maxAge=2592000)](https://github.com/jkolden/penske/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/jkolden/penske.svg?maxAge=2592000)](https://github.com/jkolden/penske/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fjkolden%2Fpenske)]

## Objective and Overview

This PaaS example was built to demonstrate how Penske can coordinate and manage employee learning through a series of progressions referred to as "badges". Each badge is comprised of a series of learning courses. As badges are completed, checklists are sent to Oracle HCM so that they can be validated by a supervisor or manager. Upon validation, a pay element is sent to Oracle Payroll to be added to the employee's hourly stipend.

The solution consists of three components:

- a desktop application built with Oracle Applications Express. All of the cloud SOAP and REST API's are contained within a PL/SQL package titled penske_pkg.
- A REST API built with Oracle Rest Data Services that serves the data stored in the apex schema to the mobile UI.
- a mobile UI built with React and deployed to the Oracle Cloud Infrastructure Kubernetes Cluster.

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

This application uses the following cloud API's:

- [HCM Allocated Checklist](https://docs.oracle.com/en/cloud/saas/global-human-resources/19b/farws/op-allocatedchecklists-x-operations-0.html)
- [ERP Integration Service (uploadFileToUcm)](https://docs.oracle.com/en/cloud/saas/financials/18c/oeswf/erp-integration-service-ErpIntegrationService-svc-9.html)
- [HCM Data Loader Integration Web Service](https://docs.oracle.com/en/solutions/load-data-into-hcm-cloud/use-hcm-data-loader-integration-web-service1.html)

## Deployment

- The client application is deployed in a single docker container running on Oracle Cloud Infrastructure Kubernetes Cluster.
- The server application is an apex application running on apex.oracle.com.

## Documentation

The documentation for the Material Kit PRO React is hosted at our [website](https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial).

## File Structure

Within the download you'll find the following directories and files:

```
material-kit-pro
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── README.md
├── gulpfile.js
├── jsconfig.json
├── package.json
├── Documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   │   ├── material-kit-pro-react.css
    │   │   ├── material-kit-pro-react.css.map
    │   │   └── material-kit-pro-react.min.css
    │   ├── img
    │   │   ├── arrow-left.cur
    │   │   ├── arrow-right.cur
    │   │   ├── assets-for-demo
    │   │   │   ├── example-pages
    │   │   │   ├── ourClients
    │   │   │   ├── presentationViewSectionComponent
    │   │   │   └── sections
    │   │   │       └── imgs.js
    │   │   ├── examples
    │   │   ├── faces
    │   │   ├── flags
    │   │   ├── loading-bubbles.svg
    │   │   └── sections
    │   ├── jss
    │   │   ├── material-kit-pro-react
    │   │   │   ├── components
    │   │   │   └── views
    │   │   │       ├── aboutUsSections
    │   │   │       ├── blogPostSections
    │   │   │       ├── blogPostsSections
    │   │   │       ├── componentsSections
    │   │   │       ├── ecommerceSections
    │   │   │       ├── landingPageSections
    │   │   │       ├── presentationSections
    │   │   │       ├── pricingSections
    │   │   │       ├── sectionsSections
    │   │   └── material-kit-pro-react.js
    │   └── scss
    │       ├── core
    │       │   ├── mixins
    │       │   └── variables
    │       ├── plugins
    │       └── material-kit-pro-react.scss
    ├── components
    │   ├── Accordion
    │   │   └── Accordion.js
    │   ├── Badge
    │   │   └── Badge.js
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardAvatar.js
    │   │   ├── CardBody.js
    │   │   ├── CardFooter.js
    │   │   └── CardHeader.js
    │   ├── Clearfix
    │   │   └── Clearfix.js
    │   ├── CustomButtons
    │   │   └── Button.js
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.js
    │   ├── CustomFileInput
    │   │   └── CustomFileInput.js
    │   ├── CustomInput
    │   │   └── CustomInput.js
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.js
    │   ├── CustomTabs
    │   │   └── CustomTabs.js
    │   ├── CustomUpload
    │   │   └── ImageUpload.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Header
    │   │   ├── Header.js
    │   │   └── HeaderLinks.js
    │   ├── InfoArea
    │   │   └── InfoArea.js
    │   ├── Instruction
    │   │   └── Instruction.js
    │   ├── Media
    │   │   └── Media.js
    │   ├── NavPills
    │   │   └── NavPills.js
    │   ├── Pagination
    │   │   └── Pagination.js
    │   ├── Parallax
    │   │   └── Parallax.js
    │   ├── Snackbar
    │   │   └── SnackbarContent.js
    │   ├── Table
    │   │   └── Table.js
    │   └── Typography
    │       ├── Danger.js
    │       ├── Info.js
    │       ├── Muted.js
    │       ├── Primary.js
    │       ├── Quote.js
    │       ├── Rose.js
    │       ├── Small.js
    │       ├── Success.js
    │       └── Warning.js
    ├── index.js
    ├── logo.svg
    └── views
        ├── AboutUsPage
        │   ├── AboutUsPage.js
        │   └── Sections
        │       ├── SectionContact.js
        │       ├── SectionDescription.js
        │       ├── SectionOffice.js
        │       ├── SectionServices.js
        │       └── SectionTeam.js
        ├── BlogPostPage
        │   ├── BlogPostPage.js
        │   └── Sections
        │       ├── SectionBlogInfo.js
        │       ├── SectionComments.js
        │       ├── SectionSimilarStories.js
        │       └── SectionText.js
        ├── BlogPostsPage
        │   ├── BlogPostsPage.js
        │   └── Sections
        │       ├── SectionImage.js
        │       ├── SectionInterested.js
        │       ├── SectionPills.js
        │       └── SubscribeLine.js
        ├── ComponentsPage
        │   ├── ComponentsPage.js
        │   └── Sections
        │       ├── SectionBasics.js
        │       ├── SectionCards.js
        │       ├── SectionCarousel.js
        │       ├── SectionContentAreas.js
        │       ├── SectionFooter.js
        │       ├── SectionJavascript.js
        │       ├── SectionNavbars.js
        │       ├── SectionNotifications.js
        │       ├── SectionPills.js
        │       ├── SectionPreFooter.js
        │       ├── SectionTabs.js
        │       └── SectionTypography.js
        ├── ContactUsPage
        │   └── ContactUsPage.js
        ├── EcommercePage
        │   ├── EcommercePage.js
        │   └── Sections
        │       ├── SectionBlog.js
        │       ├── SectionLatestOffers.js
        │       └── SectionProducts.js
        ├── ErrorPage
        │   └── ErrorPage.js
        ├── LandingPage
        │   ├── LandingPage.js
        │   └── Sections
        │       ├── SectionProduct.js
        │       ├── SectionTeam.js
        │       └── SectionWork.js
        ├── LoginPage
        │   └── LoginPage.js
        ├── PresentationPage
        │   ├── PresentationPage.js
        │   └── Sections
        │       ├── SectionCards.js
        │       ├── SectionComponents.js
        │       ├── SectionContent.js
        │       ├── SectionDescription.js
        │       ├── SectionExamples.js
        │       ├── SectionFreeDemo.js
        │       ├── SectionOverview.js
        │       ├── SectionPricing.js
        │       └── SectionSections.js
        ├── PricingPage
        │   ├── PricingPage.js
        │   └── Sections
        │       ├── SectionFeatures.js
        │       └── SectionPricing.js
        ├── ProductPage
        │   └── ProductPage.js
        ├── ProfilePage
        │   └── ProfilePage.js
        ├── SectionsPage
        │   ├── Sections
        │   │   ├── SectionBlogs.js
        │   │   ├── SectionContacts.js
        │   │   ├── SectionFeatures.js
        │   │   ├── SectionHeaders.js
        │   │   ├── SectionPricing.js
        │   │   ├── SectionProjects.js
        │   │   ├── SectionTeams.js
        │   │   └── SectionTestimonials.js
        │   └── SectionsPage.js
        ├── ShoppingCartPage
        │   └── ShoppingCartPage.js
        └── SignupPage
            └── SignupPage.js
```

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

## Licensing

- Copyright 2018 Creative Tim (https://www.creative-tim.com/)

- Creative Tim [license](https://www.creative-tim.com/license)

## Useful Links

- [More products](https://www.creative-tim.com/bootstrap-themes) from Creative Tim
- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Freebies](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)

##### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://www.instagram.com/CreativeTimOfficial>

# penske
