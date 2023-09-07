# Bytebank Test Plan V1

##  1. Product, Revision and Overview
Describe the product and revision designator.
Describe briefly how the product works. Reference other material as appropriate.
## 2. Product History
Include a short history of previous revisions of this product. (3-4 sentences). Include defect history.
## 3. Features to be tested
List all features to be tested. Organize the list in the way that makes most sense- user features, or by level:
Application
Demo software
Client substrate
Server
Network (this may be more layers)
##  4. Features not to be tested
Describe any features not to be tested
##  5. Configurations to be tested and excluded
I recommend a table showing which hardware configurations will be tested with which software.
##  6. Environmental requirements
Enumerate hardware, firmware, software, networks, etc. required to carry out the testing.
##  7. System test methodology.
Brief description of work items to be performed from the beginning to the end of the product development.
##  8. Initial Test requirements
Test strategy (this document), written by test personnel, reviewed by product team, agreed to by project manager.
## 9. System test entry and exit criteria
        9.1. Entry Criteria
The software must meet the criteria below before the product can start system test. Specifically enumerate any project-specific departures from the Generic Criteria. This list must be negotiated with and agreed upon by the project leader.
Generic criteria:
1. All basic functionality must work.
2. All unit tests run without error.
3. The code is frozen and contains complete functionality.
4. The source code is checked into the CMS.
5. All code compiles and builds on the appropriate platforms.
6. All known problems posted to the bug-tracking system.
        9.2. Exit Criteria
The software must meet the criteria below before the product can exit from system test. Specifically enumerate any project-specific departures from the Generic Criteria. This list must be negotiated with and agreed upon by the project leader.
Generic criteria:
1. All system tests executed (not passed, just executed).
2. Successful execution of any "Getting Started" sequence.
3. Results of executed tests must be discussed with product management team.
4. Successful generation of executable images for all appropriate platforms.
5. Code is completely frozen.
6. Documentation review is complete.
7. There are 0 showstopper bugs.
8. There are fewer than <x> major bugs, and <y> minor bugs.
##  10. Test Deliverables
• Automated tests in <framework>
• Test Strategy and SQA project plan
• Test procedure
• Test logs
• Bug-tracking system report of all issues raised during SQA process
• Test Coverage measurement
    11. References
Other documents referring the project or testing.