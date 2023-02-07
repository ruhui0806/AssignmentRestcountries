# Description:

This project is for the integrify assignemnt (React). This application mainly uses React with Bootstrap and Material UI for styling. This application use a JsonplaceHolde API (restcountries.com) to get the data.

# Deployment:

The application is deployed to Netlify: https://restcountries-application.netlify.app/

# Accomplished assignments:

1. contains a home page that displays the country data with necessary information
2. when clicking on the arrow button, it navigates to another page showing detailed information about the country
3. contains a search fieldthat allows users to search country by country name.
4. when displaying country data, pagination is enabled to only show 5 countries per page
5. the application uses functional react component, together with several react hooks: useState, useEfect, useParams, and custom hooks
6. the application uses Boostrap and Material UI for styling.
7. the application is deployed to Netlify
8. the application contains cypress e2d test (the tests are located at: ./integrify-assignement/cypress/e2e/restcountries.js).
9. the data is sorted by country name

# Run the application:

1.  clone the application from github to your local machine, and then run:

        npm install

2.  go to the repository(./integrify-assignement) and run the following command to start the application:

        npm start

# Run the test:

1.  go to the directory (./integrify-assignement) and run the following command:

        npm run cypress:open

2.  a window will be opened, where you can select E2E Testing (Configured)
3.  start the test by clicking the button"Start E2E Testing in Chrome"
4.  click the test file "restcountreis.cy.js" to start running the test
