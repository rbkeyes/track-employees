// const express = require('express');
// // const mysql = require('mysql2');
// const consoleTable = require('console.table');
// const prompts = require("./utils/prompts");
// const inquirer = require('inquirer');
// const { viewData, getChoices, modifyDb } = require('./utils/queries');
// const statements = require('./utils/preppedStatements');


// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// const init = async() => {
//     const answers = await inquirer.prompt(prompts);
//     console.log(answers)
//     // console.log(runPrompts());
//     // viewData(statements.viewDepartments) = await runPrompts();
//     // switch (answers) {
//     //             case 'View all departments':
//     //                 viewData(statements.viewDepartments)
//     //                 break;
//     //             case 'View all roles':
//     //                 viewTable(statements.viewRoles);
//     //                 break;
//     //             case 'View all employees':
//     //                 viewTable(statements.viewEmployees);
//     //                 break;
//     //             case 'Add a department':
//     //                 modifyDb(statements.addDepartment, new Department(answers));
//     //                 break;
//     //             default:
//     //                 console.log("Goodbye")
//     //                 break;
//     //         };
// };


// // default response
// app.use((req, res) => {
//     res.status(404).end();
// });

// // listening
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// init();