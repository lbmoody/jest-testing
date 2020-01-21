const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util")

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

const team = [];
const writeFileAsync = util.promisify(fs.writeFile);

class teamBuilder {
    confirmManager() {
        inquirer
            .prompt([
                {
                    type: "confirm"
                    , message: "Are you the team manager?"
                    , name: "managerConfirm"
                }
            ]).then(res => {
                if (res.managerConfirm) {
                    this.createManager()
                } else {
                    console.log("You need to be a manager to create a team!")
                    process.exit(0);
                }
            })
    };

    createManager() {
        inquirer
            .prompt([
                {
                   type: "input"
                   , message: "What is your name?"
                   , name: "managerName"
                },
                {
                   type: "input"
                   , message: "What is your ID?"
                   , name: "managerID"
                },
                {
                   type: "input"
                   , message: "What is your office phone?"
                   , name: "managerPhone"
                },
                {
                   type: "input"
                   , message: "What is your office email?"
                   , name: "managerEmail"
                },
            ]).then(res => {
                const manager = new Manager(res.managerName, res.managerID, res.managerEmail, res.managerPhone);
                team.push(manager);
                this.createTeam();
            });
    };

    createTeam() {
        inquirer
            .prompt([
                {
                    type: "list"
                    , message: "What teams members would you like to create?"
                    , choices: ["Engineer", "Intern", "I'm done Adding Team Members"]
                    , name: "employeeType"
                }
            ]).then(res => {
                if (res.employeeType ==="Engineer"){
                    this.createEngineer();
                } else if (res.employeeType === "Intern") {
                    this.createIntern();
                } else {
                    console.log(`Team Members: ${JSON.stringify(team)}`);
                    render(team);
                    fs.writeFile(outputPath, render(team), err => {
                        if (err) throw err;
                    })

                }
            });
    };

    createEngineer() {
        inquirer
            .prompt([
                {
                    type: "input"
                    , message: "What is your engineer's name?"
                    , name: "engineerName"
                },
                {
                    type: "input"
                    , message: "What is the engineer's ID?"
                    , name: "engineerID"
                },
                {
                    type: "input"
                    , message: "What is the engineer's gitlab username?"
                    , name: "engineerPhone"
                },
                {
                    type: "input"
                    , message: "What is the engineer's office email?"
                    , name: "engineerEmail"
                },
            ]).then(res => {
                const engineer = new Engineer(res.engineerName, res.engineerID, res.engineerEmail, res.engineerPhone);
                team.push(engineer);
                this.createTeam();
            });
    };

    createIntern() {
        inquirer
            .prompt([
                {
                    type: "input"
                    , message: "What is the inter's name?"
                    , name: "internName"
                },
                {
                    type: "input"
                    , message: "What is the inter's ID?"
                    , name: "internID"
                },
                {
                    type: "input"
                    , message: "What is the inter's school?"
                    , name: "internSchool"
                },
                {
                    type: "input"
                    , message: "What is the inter's office email?"
                    , name: "internEmail"
                },
            ]).then(res => {
                const intern = new Intern(res.internName, res.internID, res.internEmail, res.internSchool);
                team.push(intern);
                this.createTeam();
            });
    }


}

const appStart = new teamBuilder();

appStart.confirmManager();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
