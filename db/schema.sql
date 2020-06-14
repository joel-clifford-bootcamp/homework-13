DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE (burger_name)
);