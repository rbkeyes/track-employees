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