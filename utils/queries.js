// import and require mysql
const mysql = require('mysql2');

const statements = require('./preppedStatements')
const consoleTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Sackopotatum',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
).promise();

const getAndViewTable = async (sql, params) => {
    const data = await db.query(sql, params);
    if (!data) {
        console.error('Unable to find requested data');
    }
    console.table(data[0]);
};

// get list of departments
const getChoices = async (sql) => {
    const choices = await db.query(sql);
    if (!choices) {
        console.log('No choices available');
        return;
    }
    const choiceList = await choices[0].map(choice => choice.name);
    return choiceList;
};

getAndViewTable(statements.viewRoles, null)

module.exports = { getAndViewTable, getChoices }