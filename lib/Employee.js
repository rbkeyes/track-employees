const Role = require('./Role')

class Employee extends Role {
    constructor(answers) {
        super(answers);
        this.first_name = answers.firstName;
        this.last_name = answers.lastName;
        this.manager_name = answers.managerName   
        this.employee_name = answers.employeeName;     
    };

    getParams() {
        if (this.manager_name === "No manager") {
            this.manager_name = null;
        } 
        return [this.first_name, this.last_name, this.title, this.manager_name];
    };

    updateRole() {
        return [this.title, this.employee_name];
    }
};

console.log(new Employee({roleTitle: "manager", employeeName: "Polly Pocket"}).updateRole());

module.exports = Employee;