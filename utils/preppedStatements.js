// prepared statements object
// to be used when calling queries functions
const statements = {
    viewDepartments:
        `SELECT * FROM department`,
    viewRoles:
        `SELECT role.id, role.title, department.name AS department, role.salary
        FROM role
        LEFT JOIN department 
        ON role.department_id = department.id`,
    viewEmployees:
        `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT_WS(' ', m.first_name, m.last_name) AS manager
        FROM Employee e
        LEFT JOIN role AS r
        ON e.role_id = r.id
        LEFT JOIN department AS d
        ON r.department_id = d.id
        LEFT JOIN Employee m
        ON e.manager_id = m.id`,
    allDepartments:
        `SELECT name FROM department`,
    allRoles:
        `SELECT title AS name FROM role`,
    allManagers:
        `SELECT CONCAT_WS(" ", employee.first_name, employee.last_name) AS name 
         FROM role
         JOIN employee
         ON role.id = employee.role_id
         WHERE role.title = "manager"`,
    allEmployees:
        `SELECT CONCAT_WS(' ', first_name, last_name) AS name
        FROM employee`,
    addDepartment:
        `INSERT INTO department (name)
        VALUES(?)`,
    addRole:
        `INSERT INTO role (title, salary, department_id)
        VALUES(?, ?, ?)`,
    addEmployee:
        `INSERT INTO employee (first_name, last_name, role, manager)
        VALUES(?, ?, ? ,?)`,
    updateRole:
        `UPDATE employee
        SET role_id = ?
        WHERE id = ?`
};


module.exports = statements;
