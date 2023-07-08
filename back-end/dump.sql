-- Create database.
CREATE SCHEMA `orbit` ;

-- Create "companies" table.
CREATE TABLE `orbit`.`companies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));

-- Create "contacts" table.
CREATE TABLE `orbit`.`contacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));

-- Create "deals" table.
CREATE TABLE `orbit`.`deals` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));

-- Create "quotes" table.
CREATE TABLE `orbit`.`quotes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));

-- Create "tickets" table.
CREATE TABLE `orbit`.`tickets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));

-- Create "tasks" table.
CREATE TABLE `orbit`.`tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));
