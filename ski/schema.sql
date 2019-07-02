DROP DATABASE IF EXISTS ski;

CREATE DATABASE ski;

USE ski;

CREATE TABLE lifts (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  start_elevation int NOT NULL,
  end_elevation int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE runs (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  terrain varchar(50) NOT NULL,
  status boolean NOT NULL default 0,
  is_favorite boolean NOT NULL default 0,
  to_complete boolean NOT NULL default 0,
  groomed boolean NOT NULL default 0,
  vertical_feet int NOT NULL,
  wait_time varchar(50) NOT NULL,
  lift_id integer NOT NULL,
  FOREIGN KEY (lift_id) REFERENCES lifts(id),
  PRIMARY KEY (id)
);

CREATE TABLE places (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(200) NOT NULL,
  open_time TIME(3) NOT NULL,
  close_time TIME(3) NOT NULL,
  PRIMARY KEY (id)
);

-- Populates lifts

INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Lookout Express", 6130, 8120);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Backside Express", 6800, 8610);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Promised Land Express", 6800, 8220);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Timberline", 6400, 6970);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Highlands Gondola", 6350, 6950);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Big Springs Gondola Express", 6330, 6950);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Village Express", 6330, 6950);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Tahoe Zephyr Express", 6950, 7620);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Arrow Express", 6950, 7400);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Vista Express", 6950, 7700);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Rendezvous Express", 7700, 8550);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("Comstock Express", 7400, 8620);
INSERT into lifts (name, start_elevation, end_elevation) VALUES ("The Big Easy", 6950, 7220);

-- Populates runs

-- Lookout Chair

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("The Camp Glade", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Schwarzstrasse", "Blue Square: More Difficult", 1, 0, 0, 1, 1990, '20 Minutes', 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Washoe", "Blue Square: More Difficult", 1, 0, 0, 1, 1990, '20 Minutes', 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Lookout Bypass", "Blue Square: More Difficult", 1, 0, 0, 1, 1990, '20 Minutes', 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Martis", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1990, '20 Minutes', 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Sugar Pine Glade", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Boca", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Gooseneck", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Stampede", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Prosser", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1990, '20 Minutes', 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Lookout Glade", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 1);

-- Backside Chair

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Drifter", "Blue Square: More Difficult", 1, 0, 0, 1, 1420, '20 Minutes', 3);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("The Islands", "Blue Square: More Difficult", 1, 0, 0, 0, 1420, '20 Minutes', 3);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Castle Peak", "Blue Square: More Difficult", 1, 0, 0, 1, 1420, '20 Minutes', 3);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Promised Land", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1420, '20 Minutes', 3);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Iron Horse", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Polaris", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("The Rapids", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Burnout", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Monument Glade", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Rail Splitter", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Sierra Grande", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Challenger", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Follow Me", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Lower Burnout", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Down Under", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Why Not", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Backdoor", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 2);

-- Timberline Runs

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Overland Trail", "Blue Square: More Difficult", 1, 0, 0, 1, 570, '20 Minutes', 4);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Timber Line", "Blue Square: More Difficult", 1, 0, 0, 1, 570, '20 Minutes', 4);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Gateway", "Blue Square: More Difficult", 1, 0, 0, 0, 570, '20 Minutes', 4);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("The Glades", "Blue Square: More Difficult", 1, 0, 0, 1, 570, '20 Minutes', 4);

-- Highlands Gondola

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Coyote Fork", "Blue Square: More Difficult", 1, 0, 0, 1, 600, '20 Minutes', 5);

-- Big Springs Gondola Express

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, lift_id) VALUES ("Village Run", "Blue Square: More Difficult", 1, 0, 0, 1, 620, '20 Minutes', 6);

-- Places Restaurants

INSERT into places (name, description, open_time, close_time) VALUES ("Main Lodge", "Restaurants, Bathrooms, Lockers, Bars, Shops, Customer Services", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Zephyr Lodge", "Restaurants, Bathrooms, Lockers, Bars, Shops, Customer Services", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Comstock Lodge", "Restaurants, Bathrooms, Lockers, Bars, Shops, Customer Services", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Backside Lodge", "Restaurants, Bathrooms, Lockers, Bars, Shops, Customer Services", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Lookout Tables", "Picknick Tables", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Logers Loop Tables", "Picknick Tables", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Village", "Everything", '08:00:00', '11:00:00');


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/