const statements = require("../utils/preppedStatements");
// const { viewData } = require("../utils/queries");

class Menu {
    constructor(answers) {
        this.choice = answers.mainMenu;
    };

    doThis() {
        switch (this.choice) {
            case 'View all departments':
                return statements.viewDepartments;
            case 'View all roles':
                return statements.viewRoles;
            case 'View all employees':
                return statements.view;
            case 'Add a department':
                return statements.addDepartment;
            case 'Add a role':
                return statements.addRole;
            case 'Add an employee':
                return statements.addEmployee;
                    }
        }
    }



console.log(new Menu({ mainMenu: 'View all roles' }).doThis())


// module.exports = Menu;