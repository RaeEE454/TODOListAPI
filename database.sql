CREATE DATABASE "todoapp";

-- /c into todoapp

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);