const Department = require('./Department')

class Role extends Department {
    super(answers);
    constructor(answers) {
        this.title = answers.roleTitle;
        this.salary = answers.salary;
    };
};