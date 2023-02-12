// import and require mysql
const mysql = require('mysql2');

const consoleTable = require('console.table');
const statements = require('./preppedStatements')

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


const getData = async(sql) => {
    try {
        const data = await db.query(sql);
        console.log(data[0]);
        return data;
    } catch (err) {
        console.error(err);
    }
};
getData(statements.viewDepartments);
// }

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

const viewData = async (sql) => {
    try {
        const data = await db.query(sql);
        if (!data) {
            console.error('Unable to find requested data');
        }
        // not sure why query if returning an array of arrays with bunch of extra data
        // index 0 returns desired data only
        console.log(data[0]);
        console.table(data[0]);
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

// viewData('SELECT * FROM department');

module.exports = { viewData, getChoices, modifyDb }