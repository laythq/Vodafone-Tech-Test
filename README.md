# Vodafone-Tech-Test

![](https://raw.githubusercontent.com/laythq/Vodafone-Tech-Test/blob/master/Screenshot.38.57.png?raw=true)

This task was completed according to the following specifications:

A phone component as displayed in ‘page.jpeg’ that will display in Chrome, IE11 and Firefox. On selection of a colour or capacity the image will change and the prices will update.

I decided to build this component as a single page application using the React JS framework, which allowed the dynamic rendering of multiple components, including: the image, capacity, colour and price descriptions. The page is therefore split into a number of components, with two parent-child relations that allow the parents (the colour and capacity buttons) to update the state of the children (the image and prices). These two parent-child relationships was the simplest solution I could think of for this problem, as it reflected the dependency of the image and prices on the capacity and colour selected. The parents update the state of their children through functions written in each child module (#updateMonthlyCost, #updateUpFrontCost, and #updateImage), which is bound to that child and exported to the parent. When the parent calls each function with specific arguments, the function updates the child's state and causes the child component to re-render correctly.

The application is built with webpack and babel, and can be run and tested using the following npm scripts:

To install this application, clone this repo and install all necessary modules with `npm install`.

To run the application locally at `localhost:8080`, run `npm start` and navigate to the page.

This app is unit tested with Enzyme and Jest. Each component is tested individually and I have tried to isolate each test from some of its dependencies using the Jest mocking function. I have tried to focus all testing output rather than implementation, and left all integration testing to my feature test. Unit tests can be run with `npm test`.

To test component integration I used Cypress. It tests the basic features and user stories as listed in the specifications, i.e. whenever colour or capacity is changed, the image and price descriptions will change accordingly. To run the Cypress tests start the application with:

`npm start`

then, in a separate terminal window, run:

`npx cypress run --spec ./cypress/integration/features_spec`

to see the tests run in the command line. To see the Cypress tests run visually, open cypress with `npx cypress open`, and click on features_spec.js.

For all other non-React elements in the page, I used HTML with Bootstrap. The Bootstrap flexbox tool seemed a good solution for the page layout, as it allowed me to design the page as a simple collection of nested columns.

## Limitations:

I had to priorities certain features and elements of this app due to time constraints. Therefore the styling is not as good as it could be, although I think it comes close to mimicking that of the sample image (see ./developer_task/page.jpeg).

For the same reason, I did not have time to test implementation in IE11 and Firefox. This app has been tested in Chrome through Cypress.
