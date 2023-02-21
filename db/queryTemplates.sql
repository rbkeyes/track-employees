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

INSERT INTO role (title, salary, department_id)
VALUES ('intern', 30, (SELECT id as department_id
    FROM department d
    WHERE name = 'accounting'));

-- add employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Lilly', 'Dog', 
(SELECT id as role_id
FROM role
WHERE title = 'accountant'), 
(SELECT m.id as manager_id
FROM employee m
WHERE CONCAT_WS(' ', m.first_name, m.last_name) = 'Parker Keyes'));

-- add employee (no manager)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Tatum', 'Keyes', 
(SELECT id as role_id
FROM role
WHERE title = 'manager'), 
null);

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

-- get department id from dept name
SELECT id as department_id
FROM department
WHERE name = '?';

-- get manager_id from manager name (concat)
SELECT id as manager_id
FROM employee
WHERE CONCAT_WS(' ', first_name, last_name) = '?';

-- get role_id from role.title
SELECT id as role_id
FROM role
WHERE title = 'accountant';

-- update role (works here but trying to figure out parameters)
UPDATE employee
SET role_id = (
    SELECT id
    FROM role
    WHERE title = 'intern'
)
WHERE id = (
    SELECT employee.id
    WHERE CONCAT_WS(' ', employee.first_name, employee.last_name) = 'Lilly Dog'
);


SELECT id
    FROM role
    WHERE title = 'accountant';


SELECT id
    FROM employee
    WHERE CONCAT_WS(' ', first_name, last_name) = 'Lilly Dog';