const Department = require('./Department')

class Role extends Department {
    constructor(answers) {
        super(answers);
        this.title = answers.roleTitle;
        this.salary = answers.salary;
    };

    getDeptId() {
        
    }

    getParams() {
        return [this.title, this.salary, this.name];
    };
};

module.exports = Role;