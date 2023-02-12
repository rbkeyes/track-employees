// import and require inquirer
const inquirer = require('inquirer');

const Menu = require('../lib/Menu')
const { viewData, getChoices } = require('./queries');
const statements = require('./preppedStatements');
const consoleTable = require('console.table');


// run prompts function
const runPrompts = async () => {
    // prompts variable
    const prompts = [
        {
            name: 'mainMenu',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit'],
        }, {
            name: 'deptName',
            type: 'input',
            message: 'What is the name of the department?',
            when: (answers) => answers.mainMenu === 'Add a department'
        }, {
            name: 'roleTitle',
            type: 'input',
            message: 'What is the name of the role?',
            when: (answers) => answers.mainMenu === 'Add a role'
        }, {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the role?',
            when: (answers) => answers.roleTitle
        }, {
            name: 'deptName',
            type: 'list',
            message: 'What department does the role belong to?',
            choices: await getChoices(statements.allDepartments),
            when: (answers) =>
                answers.salary,
        }, {
            name: 'firstName',
            type: 'input',
            message: "What is the employee's first name?",
            when: (answers) => answers.mainMenu === 'Add an employee'
        }, {
            name: 'lastName',
            type: 'input',
            message: "What is the employee's last name?",
            when: (answers) => answers.firstName
        }, {
            name: 'roleTitle',
            type: 'list',
            message: "What is the employee's role?",
            choices: await getChoices(statements.allRoles),
            when: (answers) => answers.lastName
        }, {
            name: 'managerName',
            type: 'list',
            message: "Who is the employee's manager?",
            choices: await getChoices(statements.allManagers),
            when: (answers) => answers.selectRole
        }, {
            name: 'employeeName',
            type: 'list',
            message: "Which employee's role would you like to update?",
            choices: await getChoices(statements.allEmployees),
            when: (answers) => answers.mainMenu === 'Update an employee role'
        }, {
            name: 'roleTitle',
            type: 'list',
            message: "Select the employee's new role?",
            choices: await getChoices(statements.allRoles),
            when: (answers) => answers.selectEmployee
        }
    ];

    await inquirer.prompt(prompts)
    .then((answers) => {
        switch (answers.mainMenu) {
            case 'View all departments':
                viewData(statements.viewDepartments);
                break;
            case 'View all roles':
                viewData(statements.viewRoles);
                break
            case 'View all employees':
                viewData(statements.viewEmployees);
                break;
            case 'Add a department':
                modifyDb(statements.addDepartment, answers.deptName);
                break;
            case 'Add a role':
                modifyDb(statements.addRole, answers.roleTitle, answers.salary, answers.deptName);
                break;
            case 'Add an employee':
                modifyDb(statements.addEmployee, answers.firstName, answers.lastName, answers.roleTitle, answers.managerName);
                break;
            case 'Update an employee role':
                modifyDb(statements.updateRole, answers.employeeName, answers.roleTitle)
        };
    });
    
};

runPrompts();


module.exports = runPrompts;