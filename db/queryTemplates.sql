-- get all data from departments table
SELECT * FROM department;

-- get roles: id, title, department name, salary
SELECT r.id, r.title, d.name AS department, r.salary
FROM role as r
LEFT JOIN department as d
ON r.department_id = d.id;

-- get employees: id, first and last name, title, department name, salary, manager
SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT_WS(' ', m.first_name, m.last_name) AS manager
FROM Employee e 
LEFT JOIN role as r
ON e.role_id = r.id
LEFT JOIN department AS d
ON r.department_id = d.id
LEFT JOIN Employee m
ON e.manager_id = m.id;

-- add department
INSERT INTO department (name)
VALUES ('product development');

-- add role
INSERT INTO role (title, salary, department_id)
VALUES ('intern', 30, 2);

-- add employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Lilly', 'Dog', 2, null);

-- get all department names (for inquirer prompt)
SELECT name FROM department;

-- get all role titles (for inquirer prompts)
SELECT title FROM role;

-- get manager names (for prompts)
SELECT CONCAT_WS(' ', employee.first_name, employee.last_name) AS manager
FROM role
JOIN employee
ON role.id = employee.role_id
WHERE role.title = 'manager';

-- get employee names (for prompts)
SELECT CONCAT_WS(' ', first_name, last_name) AS employees
FROM employee;

-- get manager_id from manager_name
SELECT id as manager_id
FROM employee

