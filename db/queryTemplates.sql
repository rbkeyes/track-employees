-- get all data from departments table
SELECT * FROM department;

-- get roles: id, title, department name, salary
SELECT r.id, r.title, d.name AS department, r.salary
FROM role as r
LEFT JOIN department as d
ON r.department_id = d.id;