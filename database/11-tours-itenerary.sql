DROP TABLE tours_itenerary;

CREATE TABLE tours_itenerary (
  id integer PRIMARY KEY AUTO_INCREMENT,
  tour_id INTEGER NOT NULL,
  itenerary_id INTEGER NOT NULL,
  FOREIGN KEY (tour_id) REFERENCES tours(id),
  FOREIGN KEY (itenerary_id) REFERENCES itenerary(id)
);

INSERT INTO tours_itenerary (tour_id, itenerary_id)
VALUES
(2, 1),
(2, 5)
;