// import and require inquirer
const inquirer = require('inquirer');

// const Menu = require('../lib/Menu')
const getChoices = require('./queries');
const statements = require('./preppedStatements');
const consoleTable = require('console.table');

const runPrompts = async () => {
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
        choices: await getChoices(statements.departmentNames),
        when: (answers) => answers.salary,
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
        choices: await getChoices(statements.roleTitles),
        when: (answers) => answers.lastName
    }, {
        name: 'managerName',
        type: 'list',
        message: "Who is the employee's manager?",
        choices: await getChoices(statements.managerNames),
        when: (answers) => answers.selectRole
    }, {
        name: 'employeeName',
        type: 'list',
        message: "Which employee's role would you like to update?",
        choices: await getChoices(statements.employeeNames),
        when: (answers) => answers.mainMenu === 'Update an employee role'
    }, {
        name: 'roleTitle',
        type: 'list',
        message: "Select the employee's new role?",
        choices: await getChoices(statements.roleTitles),
        when: (answers) => answers.selectEmployee
    },
];
const answers = await inquirer.prompt(prompts);
console.log(answers);
return answers;
};


// const prompts = {
//     mainMenu: {
//         name: 'mainMenu',
//         type: 'list',
//         message: 'What would you like to do?',
//         choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit'],
//     },

//     addDept: {
//         name: 'deptName',
//         type: 'input',
//         message: 'What is the name of the department?',
//         // when: (answers) => answers.mainMenu === 'Add a department'
//     },

//     addRole: [
//         {
//             name: 'roleTitle',
//             type: 'input',
//             message: 'What is the name of the role?',
//             // when: (answers) => answers.mainMenu === 'Add a role'
//         }, {
//             name: 'salary',
//             type: 'input',
//             message: 'What is the salary of the role?',
//             // when: (answers) => answers.roleTitle
//         }, {
//             name: 'deptName',
//             type: 'list',
//             message: 'What department does the role belong to?',
//             choices: (answers) => {
//                 getChoices(statements.departmentNames);
//             },
//             // when: (answers) => answers.salary,
//         },
//     ],

//     addEmployee: [
//         {
//             name: 'firstName',
//             type: 'input',
//             message: "What is the employee's first name?",
//             // when: (answers) => answers.mainMenu === 'Add an employee'
//         }, {
//             name: 'lastName',
//             type: 'input',
//             message: "What is the employee's last name?",
//             // when: (answers) => answers.firstName
//         }, {
//             name: 'roleTitle',
//             type: 'list',
//             message: "What is the employee's role?",
//             // choices: await getChoices(statements.roleTitles),
//             // when: (answers) => answers.lastName
//         }, {
//             name: 'managerName',
//             type: 'list',
//             message: "Who is the employee's manager?",
//             // choices: await getChoices(statements.managerNames),
//             // when: (answers) => answers.selectRole
//         },
//     ],

//     updateEmpRole: [
//         {
//             name: 'employeeName',
//             type: 'list',
//             message: "Which employee's role would you like to update?",
//             // choices: await getChoices(statements.employeeNames),
//             // when: (answers) => answers.mainMenu === 'Update an employee role'
//         }, {
//             name: 'roleTitle',
//             type: 'list',
//             message: "Select the employee's new role?",
//             // choices: await getChoices(statements.roleTitles),
//             // when: (answers) => answers.selectEmployee
//         },
//     ],
// };





// runPrompts();


module.exports = runPrompts;