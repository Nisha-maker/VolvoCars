##Test Automation using WebdriverIO, JavaScript, Mocha
#Volvo-Test
1.	WebdriverIO: It is an open-source testing automation framework written in JavaScript and running on NodeJS. It is useful for testing web & mobile applications,also enables to run small & lightweight component tests as well as running e2e test scenarios in the browser or on a mobile device. 
2.	Mocha: Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple.

##Getting Started
#Pre-requisites
1.	Node.js installed globally on the system.
2.	Chrome browser installed.
3.	A text editor/IDE (Optional) like Sublime, Visual Studio Code, or Brackets.

##Installation
#Setup Scripts
1.	Clone the repository into a folder.
2.	Navigate to the folder and run the following command from the terminal/command prompt: "npm install"
This will install all dependencies from package.json into node_modules folder.
3.  Run the following command in terminal/command prompt: "npm install -g allure-commandline --save-dev" for allure report. 

##Command to run tests :
1. To run the test enter : npm run wdio
2. To generate report enter : npm run report


##Project Structure
#This project is built on the Page Object Model using WebdriverIO & Mocha. The folder structure is organized as follows:

1. pageObjects: It contains .js files structured as Page Object Model. Locators of each web elements are mentioned in this pageclass. These locators are used to interact with elements. It will be called out in the test file for each testcase.
2. test/specs: It is written in Mocha Framework. All the test scenarios and test cases are defined.
3. testData:  It stores the required testdatas for the testcases in JSON format.