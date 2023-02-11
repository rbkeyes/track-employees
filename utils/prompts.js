// import and require inquirer
const inquirer = require('inquirer');

// dependencies from queries file
const { viewData, getChoices } = require('./queries');
const statements = require('./preppedStatements');

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

    inquirer.prompt(prompts)
    // console.log(answers);
    .then((answers) => {
        switch
    })
    if (answers.mainMenu === 'View all departments') {
        viewData(statements.viewDepartments);
    }
};

runPrompts();


module.exports = runPrompts;