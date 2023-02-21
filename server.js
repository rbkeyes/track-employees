// import dependencies
// const express = require('express');
// const mysql = require('mysql2');
// const consoleTable = require('console.table');
// const inquirer = require('inquirer');
const runPrompts = require("./utils/prompts");
const Department = require('./lib/Department');
const Role = require('./lib/Role');
const Employee = require('./lib/Employee')
const { viewData, modifyDb } = require('./utils/queries');
const statements = require('./utils/preppedStatements');

// register port and initiate app
// const PORT = process.env.PORT || 3001;
// const app = express();

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// initiate application (async)
const init = async () => {
    // call function to run prompts, wait for answers
    const answers = await runPrompts();
    // call next function based on answers.mainMenu result
    switch (answers.mainMenu) {
        case 'View all departments':
            await viewData(statements.viewDepartments);
            break;
        case 'View all roles':
            await viewData(statements.viewRoles);
            break;
        case 'View all employees':
            await viewData(statements.viewEmployees);
            break;
        case 'Add a department':
            // console.log(answers);
            params = new Department(answers).getParams();
            sql = statements.addDepartment;
            await modifyDb(sql, params);
            break;
        case 'Add a role':
            // console.log(answers);
            params = new Role(answers).getParams();
            sql = statements.addRole;
            await modifyDb(sql, params);
            break;
        case 'Add an employee':
            // console.log(answers);
            params = new Employee(answers).getParams();
            if (answers.managerName === "No manager") {
                sql = statements.addEmployeeNoManager
            } else {
               sql = statements.addEmployee;
            };
            await modifyDb(sql, params);
            break;
        case 'Update an employee role':
            console.log()
            params = new Employee(answers).updateRole();
            sql = statements.updateRole;
            await modifyDb(sql, params);
            break;
        default:
            console.log("Goodbye");
            process.exit(0);
        // break;
    };

    init();
};


init();
