CREATE DATABASE firstapi;

create table users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);