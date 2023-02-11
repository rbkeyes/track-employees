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

const viewData = async (sql) => {
    try {
        const data = await db.query(sql);
        if (!data) {
            console.error('Unable to find requested data');
        }
        console.table(data);
    } catch (err) {
        console.error(err);
    }
};

// get list of departments
const getChoices = async (sql) => {
    try {
        const choices = await db.query(sql);
        const choiceList = await choices[0].map(choice => choice.name);
        // console.log(choiceList);
        return choiceList;
    } catch (err) {
        console.error(err);
    }
};

const modifyDb = async (sql, params) => {
    try {
        await db.query(sql, params);
            console.log('Success!');
        } catch (err) {
            console.error(err);
        }
    };

// modifyDb(statements.addDepartment, 'sewing');

module.exports = { viewData, getChoices, modifyDb }