class Department {
    constructor(answers) {
        this.name = answers.deptName
    };

    // returns new department name to be added to db
    deptName() {
        return this.name;
    };
};


module.exports = Department;