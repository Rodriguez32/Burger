DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN default false,
  DATE TIMESTAMP NOT NULL current_timestamp,
  PRIMARY KEY(id)
);