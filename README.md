# jest-testing
Node cli app that uses inquirer to generate a team profile and utilizes jest for testing.

## installation
This application uses 2 npm packages [inquirer](https://www.npmjs.com/package/inquirer) and [jest](https://www.npmjs.com/package/jest). After downloading the project please run `npm i` or `npm install` to download these dependancies.

## usage
This application is meant for a project manager to create a snapshot of their team for a specific project. It allows the manager to fill out their own details as well as the details for any number of engineers/interns who are on their team.

Inquirer will ask unique questions for each employee type. Office phone for the project manager, github username for the engineer(s) and school for the intern(s).

![app-walkthrough](./gifs/managerCreation.gif)

Here is a snapshot of the sample html template that was generated through the application.

![image](https://user-images.githubusercontent.com/24512590/72867570-9f18f880-3c9c-11ea-8e4b-3d6a404d2b47.png)

## testing
This application also utilizes jest for testing. There are tests created to ensure the class are created correctly. Creating these tests before coding the project help to ensure that the usage of the classes and functions in the application came together correctly. To run the test type `npm test` into the cli. This will perform the tests through the jest package.

![image](https://user-images.githubusercontent.com/24512590/72867985-e2279b80-3c9d-11ea-8d6c-f60f53e03ebd.png)