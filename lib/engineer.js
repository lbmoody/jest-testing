// The Engineer class `extends` from Employee, and should have these additional properties/behaviors:

// github (GitHub username)
// getGithub()
// getRole() (Overridden to return 'Engineer')

const Employee = require("./employee");

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    
}