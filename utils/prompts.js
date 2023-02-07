// import and require inquirer
const inquirer = require('inquirer');

// dependencies from queries file
const { runQuery, getChoices, choices } = require('./queries');

// create array of prompts to be used with inquirer.prompt
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
            when: (answers) => answers.newRole
        }, {
            name: 'selectDept',
            type: 'list',
            message: 'What department does the role belong to?',
            choices: getChoices(`SELECT name FROM department`),
            when: (answers) => answers.salary
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
            name: 'selectRole',
            type: 'list',
            message: "What is the employee's role?",
            choices: ['accountant', 'engineer', 'data scientist', 'manager', 'intern'],
            when: (answers) => answers.lastName
        }, {
            name: 'selectManager',
            type: 'list',
            message: "Who is the employee's manager?",
            choices: ['Reed', 'Parker', 'Tatum', 'Lilly'],
            when: (answers) => answers.role
        }, {
            name: 'selectEmployee',
            type: 'list',
            message: "Which employee's role would you like to update?",
            choices: [1, 2, 3],
            when: (answers) => answers.mainMenu === 'Update an employee role'
        }, {
            name: 'updateRole',
            type: 'list',
            message: "Select the employee's new role?",
            choices: ['accountant', 'engineer', 'data scientist', 'manager', 'intern'],
            when: (answers) => answers.selectEmployee
        }
];

// function to run prompts and return answers
const runPrompts = async () => {
    try {
        const answers = await inquirer.prompt(prompts);
        console.log(answers);
        return answers;
    } catch (err) {
        console.error(err);
        return;
    }
};

runPrompts();

module.exports = runPrompts;