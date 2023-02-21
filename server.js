// import dependencies
// const express = require('express');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const runPrompts = require("./utils/prompts");
const { Department } = require('./lib/Department')
const { viewData, getChoices, modifyDb } = require('./utils/queries');
const statements = require('./utils/preppedStatements');



// register port and initiate app
// const PORT = process.env.PORT || 3001;
// const app = express();

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
const init = async () => {
const answers = await runPrompts();
        process.exit(0);
        //         switch (answers.mainMenu) {
//             case 'View all departments':
//                 viewData(statements.viewDepartments);
//                 break;
//             case 'View all roles':
//                 viewData(statements.viewRoles);
//                 break;
//             case 'View all employees':
//                 viewData(statements.viewEmployees);
//                 break;
//             case 'Add a department':
//                 return answers;
//             case 'Add a role':
//                 return prompt = prompts.addRole;
//             case 'Add an employee':
//                 return prompt = prompts.addEmployee;
//             case 'Update an employee role':
//                 return prompt = prompts.updateEmpRole;
//             default:
//                 console.log("Goodbye");
//                 process.exit(0);
//                 // break;
//         }
//     })
// .then((prompt) => { 
// console.log(prompt);
}; 



init();


// default response
// app.use((req, res) => {
//     res.status(404).end();
// });

// listening
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// init();


    // const answers = await inquirer.prompt(prompts);
    // console.log(answers);
    // inquirer.prompt(prompts).then((answers) => {
    //     console.log(answers);
    // });
    // init();
    // viewData(statements.viewDepartments) = await runPrompts();
    // switch (answers) {
    //             case 'View all departments':
    //                 viewData(statements.viewDepartments)
    //                 break;
    //             case 'View all roles':
    //                 viewTable(statements.viewRoles);
    //                 break;
    //             case 'View all employees':
    //                 viewTable(statements.viewEmployees);
    //                 break;
    //             case 'Add a department':
    //                 modifyDb(statements.addDepartment, new Department(answers));
    //                 break;
    //             default:
    //                 console.log("Goodbye")
    //                 break;
    //         };