DROP DATABASE IF EXISTS ski;

CREATE DATABASE ski;

USE ski;

CREATE TABLE lifts (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  start_elevation int NOT NULL,
  end_elevation int NOT NULL,
  wait_time varchar(50) NOT NULL,
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
  xStart varchar(50) NOT NULL,
  yStart varchar(50) NOT NULL,
  xEnd varchar(50) NOT NULL,
  yEnd varchar(50) NOT NULL,
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

INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Lookout Express", 6130, 8120, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Backside Express", 6800, 8610, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Promised Land Express", 6800, 8220, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Timberline", 6400, 6970, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Highlands Gondola", 6350, 6950, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Big Springs Gondola Express", 6330, 6950, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Village Express", 6330, 7000, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Tahoe Zephyr Express", 6950, 7650, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Arrow Express", 6950, 7400, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Vista Express", 6950, 7700, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Rendezvous Express", 7700, 8550, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("Comstock Express", 7400, 8620, "20 minutes");
INSERT into lifts (name, start_elevation, end_elevation, wait_time) VALUES ("The Big Easy", 6950, 7220, "20 minutes");

-- Populates runs

-- Lookout Chair

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Camp Glade", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 200, 200, 100, 100, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Schwarzstrasse", "Blue Square: More Difficult", 1, 0, 0, 1, 1990, '20 Minutes', 200, 200, 100, 100, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Washoe", "Blue Square: More Difficult", 1, 0, 0, 1, 1990, '20 Minutes', 200, 200, 100, 100, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lookout Bypass", "Blue Square: More Difficult", 1, 0, 0, 1, 1990, '20 Minutes', 200, 200, 100, 100, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Martis", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1990, '20 Minutes', 200, 200, 100, 100, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Sugar Pine Glade", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 200, 200, 100, 100, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Boca", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 200, 200, 100, 100, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Gooseneck", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 200, 200, 100, 100, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Stampede", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 200, 200, 100, 100, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Prosser", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1990, '20 Minutes', 200, 200, 100, 100, 1);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lookout Glade", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1990, '20 Minutes', 200, 200, 100, 100, 1);

-- Backside Chair

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Drifter", "Blue Square: More Difficult", 1, 0, 0, 1, 1420, '20 Minutes', 200, 200, 100, 100, 3);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Islands", "Blue Square: More Difficult", 1, 0, 0, 0, 1420, '20 Minutes', 200, 200, 100, 100, 3);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Castle Peak", "Blue Square: More Difficult", 1, 0, 0, 1, 1420, '20 Minutes', 200, 200, 100, 100, 3);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Promised Land", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1420, '20 Minutes', 200, 200, 100, 100, 3);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Iron Horse", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 10, -247, 213, -61, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Polaris", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 20, -269, 262, -63, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Rapids", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 6, -295, 246, -61, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Burnout", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 8, -297, 223, -141, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Monument Glade", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 28, -299, 225, -152, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Rail Splitter", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 42, -300, 222, -176, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Sierra Grande", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 81, -300, 224, -181, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Challenger", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 200, 200, 100, 100, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Follow Me", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 200, 200, 100, 100, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lower Burnout", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 200, 200, 100, 100, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Down Under", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 200, 200, 100, 100, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Why Not", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1810, '20 Minutes', 200, 200, 100, 100, 2);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Backdoor", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1810, '20 Minutes', 200, 200, 100, 100, 2);

-- Timberline Runs

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Overland Trail", "Blue Square: More Difficult", 1, 0, 0, 1, 570, '20 Minutes', 200, 200, 100, 100, 4);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Timber Line", "Blue Square: More Difficult", 1, 0, 0, 1, 570, '20 Minutes', 200, 200, 100, 100, 4);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Gateway", "Blue Square: More Difficult", 1, 0, 0, 0, 570, '20 Minutes', 200, 200, 100, 100, 4);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Glades", "Blue Square: More Difficult", 1, 0, 0, 1, 570, '20 Minutes', 200, 200, 100, 100, 4);

-- Highlands Gondola

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Coyote Fork", "Blue Square: More Difficult", 1, 0, 0, 1, 600, '20 Minutes', 200, 200, 100, 100, 5);

-- Big Springs Gondola Express

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Village Run", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 620, '20 Minutes', 200, 200, 100, 100, 6);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Condo Run", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 620, '20 Minutes', 200, 200, 100, 100, 6);

-- Village Express

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Woods", "Blue Square: More Difficult", 1, 0, 0, 1, 670, '20 Minutes', 200, 200, 100, 100, 7);

-- Tahoe Zephyr Express
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Northern Lights", "Blue Square: More Difficult", 1, 0, 0, 0, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Christmas Tree", "Blue Square: More Difficult", 1, 0, 0, 1, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Sodergren's", "Blue Square: More Difficult", 1, 0, 0, 0, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Gully", "Blue Square: More Difficult", 1, 0, 0, 1, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Kid's Adventure Zone", "Blue Square: More Difficult", 1, 0, 0, 0, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Uperr Pioneer", "Blue Square: More Difficult", 1, 0, 0, 1, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lower Pioneer", "Blue Square: More Difficult", 1, 0, 0, 1, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Deer Skin", "Blue Square: More Difficult", 1, 0, 0, 1, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Hoot Owl", "Blue Square: More Difficult", 1, 0, 0, 0, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Face", "Blue Square: More Difficult", 1, 0, 0, 1, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lookout Bypass", "Blue Square: More Difficult", 1, 0, 0, 0, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Boondocks", "Blue Square: More Difficult", 1, 0, 0, 0, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Upper Lion's Way", "Blue Square: More Difficult", 1, 0, 0, 1, 700, '20 Minutes', 200, 200, 100, 100, 8);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Home Run", "Blue Square: More Difficult", 1, 0, 0, 1, 700, '20 Minutes', 200, 200, 100, 100, 8);

-- Arrow Express

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lumberjack", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 450, '20 Minutes', 200, 200, 100, 100, 9);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Upper Main Street", "Blue Square: More Difficult", 1, 0, 0, 1, 450, '20 Minutes', 200, 200, 100, 100, 9);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lower Main Street", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 450, '20 Minutes', 200, 200, 100, 100, 9);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Be Early", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 450, '20 Minutes', 200, 200, 100, 100, 9);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Gultch", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 450, '20 Minutes', 200, 200, 100, 100, 9);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Easy Street", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 450, '20 Minutes', 200, 200, 100, 100, 9);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lower Main Street", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 450, '20 Minutes', 200, 200, 100, 100, 9);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Wood Cutter", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 450, '20 Minutes', 200, 200, 100, 100, 9);

-- Vista Express

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Sawmill Glade", "Black Diamond: Most Difficult", 1, 0, 0, 0, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Logger's Loop", "Blue Square: More Difficult", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Cat's Face", "Blue Square: More Difficult", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Hornet's Nest", "Black Diamond: Most Difficult", 1, 0, 0, 0, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Surprise", "Black Diamond: Most Difficult", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Drop Off", "Blue Square: More Difficult", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Stash", "Terrain Parks/Pipes", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Pinball", "Terrain Parks/Pipes", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Pipeline", "Terrain Parks/Pipes", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Moonshine", "Terrain Parks/Pipes", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Sidewinder", "Terrain Parks/Pipes", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Forerunner", "Terrain Parks/Pipes", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Playground", "Terrain Parks/Pipes", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lil Stash", "Terrain Parks/Pipes", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Skid Trail", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 750, '20 Minutes', 200, 200, 100, 100, 10);

-- Rendezvous Express

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Rendezvous Glade", "Black Diamond: Most Difficult", 1, 0, 0, 0, 850, '20 Minutes', 200, 200, 100, 100, 11);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Crosscut", "Black Diamond: Most Difficult", 1, 0, 0, 0, 850, '20 Minutes', 200, 200, 100, 100, 11);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Tonini's", "Black Diamond: Most Difficult", 1, 0, 0, 1, 850, '20 Minutes', 200, 200, 100, 100, 11);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Chute", "Blue Square: More Difficult", 1, 0, 0, 0, 850, '20 Minutes', 200, 200, 100, 100, 11);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Dutchman", "Blue Square: More Difficult", 1, 0, 0, 1, 850, '20 Minutes', 200, 200, 100, 100, 11);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Delight", "Blue Square: More Difficult", 1, 0, 0, 0, 850, '20 Minutes', 200, 200, 100, 100, 11);

-- Comstock

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("East Ridge", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Flume", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Powder Bowl", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Upper Grouse Alley", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lower Grouse Alley", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Cascades", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Corridor", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("The Plunge", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("West Ridge", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Spring Board", "Black Diamond: Most Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Ax Handle", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Stump Alley", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Luggis", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Kid's Adventure Zone", "Blue Square: More Difficult", 1, 0, 0, 0, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Upper Jiboom", "Blue Square: More Difficult", 1, 0, 0, 0, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Jiboom", "Black Diamond: Most Difficult", 1, 0, 0, 0, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Gold Mine", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Flying Squirrel", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lookout Road", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);
INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Coyboy Pass", "Blue Square: More Difficult", 1, 0, 0, 1, 1220, '20 Minutes', 200, 200, 100, 100, 12);

-- Big East

INSERT into runs (name, terrain, status, is_favorite, to_complete, groomed, vertical_feet, wait_time, xStart, yStart, xEnd, yEnd, lift_id) VALUES ("Lower Lion's Way", "Green Circle: Easiest Way Down", 1, 0, 0, 1, 270, '20 Minutes', 200, 200, 100, 100, 13);

-- Places Restaurants

INSERT into places (name, description, open_time, close_time) VALUES ("Main Lodge", "Restaurants, Bathrooms, Lockers, Bars, Shops, Customer Services", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Zephyr Lodge", "Restaurants, Bathrooms, Lockers, Bars, Shops, Customer Services", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Comstock Lodge", "Restaurants, Bathrooms, Lockers, Bars, Shops, Customer Services", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Backside Lodge", "Restaurants, Bathrooms, Lockers, Bars, Shops, Customer Services", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Lookout Tables", "Picknick Tables", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Logers Loop Tables", "Picknick Tables", '08:00:00', '04:30:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Village", "Everything", '08:00:00', '11:00:00');
INSERT into places (name, description, open_time, close_time) VALUES ("Lookout Road Tables", "Picknick Tables", '08:00:00', '04:30:00');


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/