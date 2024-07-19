DROP TABLE itenerary

CREATE TABLE itenerary (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  included_meal_id integer NOT NULL,
  content VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  edited TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY (included_meal_id) REFERENCES meals(id)
);

INSERT INTO itenerary (title, included_meal_id, content)
VALUES 
('Arrival in Tokyo', 1, 'Enjoy a free day in Tokyo or add an excursion.')
;