INSERT INTO department (name)
VALUES  ('data science'),
        ('accounting');

INSERT INTO role (title, salary, department_id)
VALUES  ('data scientist', 200, 1),
        ('manager', 250, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('David', 'Keyes', 1, 2),
        ('Parker', 'Keyes', 2, null);
