DROP TABLE weather;

CREATE TABLE weather (
  id integer PRIMARY KEY AUTO_INCREMENT,
  month INTEGER NOT NULL,
  max_temp_tokyo INTEGER NOT NULL,
  rain_tokyo INTEGER NOT NULL
);

INSERT INTO weather (month, max_temp_tokyo, rain_tokyo)
VALUES
(1, 10, 47),
(2, 10, 62),
(3, 13, 101),
(4, 19, 122),
(5, 23, 138),
(6, 25, 184),
(7, 29, 132),
(8, 31, 147),
(9, 27, 185),
(10, 21, 174),
(11, 16, 90),
(12, 12, 50)
;