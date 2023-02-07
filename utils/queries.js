// import and require mysql
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Sackopotatum',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

// array of choices to populate prompts
const choices = [];

// query statements
const viewDepartments = `SELECT * FROM department`;

const viewRoles =
    `SELECT role.id, role.title, department.name AS department, role.salary
        FROM role
        LEFT JOIN department 
        ON role.department_id = department.id`;

const viewEmployees =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT_WS(' ', m.first_name, m.last_name) AS manager
        FROM Employee e
        LEFT JOIN role AS r
        ON e.role_id = r.id
        LEFT JOIN department AS d
        ON r.department_id = d.id
        LEFT JOIN Employee m
        ON e.manager_id = m.id`;

const addDepartment =
    `INSERT INTO department (name)
    VALUES(?)`;

const addRole =
    `INSERT INTO role (title, salary, department_id)
    VALUES(?, ?, ?)`;

const addEmployee =
    `INSERT INTO employee (first_name, last_name, role, manager)
    VALUES(?, ?, ? ,?)`;

const updateRole =
    `UPDATE employee
    SET role_id = ?
    WHERE id = ?`;

const deptList = `SELECT name FROM department`;

const roleList = `SELECT title FROM role`;

const managerList =
    `SELECT CONCAT_WS(" ", employee.first_name, employee.last_name) AS  manager 
        FROM role
        JOIN employee
        ON role.id = employee.role_id
        WHERE role.title = "manager"`

const runQuery = (sql, params) => {
    db.query(sql, params, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        // console.log(' ');
        console.log(results);
        return results;
    });
};

const getChoices = (sql) => {
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        for (const result of results) {
            choices.push(result.name);
        }
        console.log(choices);
        // choices.push(results);
    });
};

runQuery(viewDepartments, null);
getChoices(deptList);

module.exports = { runQuery, getChoices, choices };