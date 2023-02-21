class Department  {
    constructor(answers) {
        this.name = answers.deptName
    };

    // returns new department name to be added to db
    getParams() {
        return this.name;
    };
};

const params = new Department({deptName: 'maintenance'}).getParams();
console.log(params);


module.exports = Department;