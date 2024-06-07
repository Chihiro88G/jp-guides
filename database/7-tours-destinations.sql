DROP TABLE tours_destinations;

CREATE TABLE tours_destinations (
  id integer PRIMARY KEY AUTO_INCREMENT,
  tour_id INTEGER NOT NULL,
  destination_id INTEGER NOT NULL,
  FOREIGN KEY (tour_id) REFERENCES tours(id),
  FOREIGN KEY (destination_id) REFERENCES destinations(id)
);

INSERT INTO tours_destinations (tour_id, destination_id)
VALUES
(1, 3),
(2, 1),
(2, 3),
(3, 1),
(3, 2),
(3, 3),
(4, 6)
;