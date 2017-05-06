CREATE DATABASE sequelizedBurger_db;

USE sequelizedBurger_db;

CREATE TABLE `burgers` (
    `id` int NOT NULL AUTO_INCREMENT,
    `burger_name` VARCHAR(255) NOT NULL,
    `devoured` BOOLEAN DEFAULT false NOT NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt`TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   
	PRIMARY KEY (`id`)
);