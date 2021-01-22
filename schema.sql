DROP DATABASE IF EXISTS moviePlanerDB;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE moviePlannerDB;

USE moviePlanerDB;

-- Create the table plans.
CREATE TABLE plans (
  id int NOT NULL AUTO_INCREMENT,
  movie varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
-- INSERT INTO plans (plan) VALUES ('Plan to fight a ninja.');
