# Project

This project is based on the Alura courses on cypress e2e tests. The objective is to cover the main use cases with automated e2e tests. The code implemented here is completely different from the one presented in the courses and covers additional test cases as well.

The application under test (Bytebank) is a simple digital bank app with basic features and pages, such as:

- Landing page
- Homepage
  - Cards page
  - Services page
  - Investments page
- Not found page
- My account page

<img src="bytebank-initial-page.png" alt="Bytebank initial page" width="50%">

[Here's the app's Figma prototype](https://www.figma.com/file/YJydxY5H8gf5lPLyKWOBbY?embed_host=notion&kind=&node-id=80%3A199&t=rKQJYFpJUumrCTx1-1&viewer=1).

⭐ Some characteristics and best practices we may find in this cypress project:
- Uses custom commands
- Uses test-data for most of the selectors
- Test cases written in gherkin style (GIVEN, WHEN, THEN)
- Generates test data with fakerjs
- Implements login via API
- Uses cy.intercept() along with wait and aliases (instead of fixed waits)
- Uses hooks properly
- Tests are independent of each other
- Sets a baseUrl and some other useful configs  

## Running the app
On the api-bytebank-v2.1 folder, execute:
 `npm install` 
 and then `npm run dev`

On the project root, execute :
`npm install` 
and then 
`npm run start`

The application will be running at <a href="http://localhost:3000/">http://localhost:3000/</a>.

## Running the e2e tests
To access the cypress dashboard:
`npx cypress open`

or to run headlessly:
`npx cypress run --browser chrome`

