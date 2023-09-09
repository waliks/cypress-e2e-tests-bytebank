# Bytebank Test Plan V1

## 1. Product, Revision, and Overview
Bytebank is a digital banking web application that allows users to create accounts, perform basic banking operations (such as deposits and withdrawals), and view their financial information. It is built with a React frontend for the user interface and a Node.js backend to manage server-side operations and data storage.

- [UI Figma Prototype](https://www.figma.com/file/YJydxY5H8gf5lPLyKWOBbY?embed_host=notion&kind=&node-id=80%3A199&t=rKQJYFpJUumrCTx1-1&viewer=1)
- [Bytebank API original repo](https://github.com/NeiltonSeguins/api-bytebank-v2)
- [Bytebank original repo](https://github.com/NeiltonSeguins/bytebank-v2)

## 2. Features to be tested
- Account registration
- Login
- Make transactions (deposit and transfer)
- Edit account
- Visualize investments 

## 3. Features not to be tested
The following features are still not implemented, therefore they will not be tested at the moment.

- Cards management
- Services options

## 4. Configurations to be tested and excluded
The application will be tested for on linux/chrome with the following page sizes:
| Width   | Height  |
| ------: | ------: |
| 1536	  | 960     |
| 414	  | 896     |

## 5. System test methodology.
Methodology will consist of automating functional end-to-end tests for the above-mentioned features, on the levels of User Interface (UI) and API. Furthermore, there will be implemented visual regression tests.

## 6. System test entry and exit criteria
### 6.1. Entry Criteria
The software must meet the criteria below before the product can start system test:

1. All basic functionality must work.
2. All unit tests run without error.
3. The code is frozen and contains complete functionality.
4. All code compiles and builds on the appropriate platforms.
5. All known problems posted to the bug-tracking system.

### 6.2. Exit Criteria
The software must meet the criteria below before the product can exit from system test:
1. All system tests executed (not passed, just executed).
2. Successful execution of all test cases for the following features:
- Account registration
- Login
- Make transactions (deposit and transfer)
3. Results of executed tests must be discussed with product management team.
4. Documentation review is complete.
5. Code is completely frozen.
6. There are 0 showstopper bugs.
7. There are fewer than 2 major bugs, and 5 minor bugs.

## 7. Test Deliverables
- Automated end-to-end tests in cypress
- Automated API tests in cypress
- Automated visual regression tests
- Visual regression tests report
- Postman API collection
- Bug-tracking system report of all issues raised during SQA process
