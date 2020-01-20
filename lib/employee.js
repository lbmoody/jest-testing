// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Employee {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }

    getName(empName) {
        this.name = empName;
    }

    getId(id) {
        this.id = id;
    }

    getEmail(empEmail) {
        this.email = empEmail;
    }

    getRole(empRole) {
        this.role = empRole;
    }
}

module.exports = Employee;