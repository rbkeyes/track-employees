const statements = require("../utils/preppedStatements");
const { viewData } = require("../utils/queries");

class Menu {
    constructor(answers) {
    this.choice = answers.mainMenu
    };

doThis() {
        return this.choice = statements.viewDepartments;
    }
}

console.log(new Menu({ mainMenu: 'View all departments'}).doThis() )


module.exports = Menu;