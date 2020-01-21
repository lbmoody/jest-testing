const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, title, name, email, officeNumber) {
        super(id, title, name, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;