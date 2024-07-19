DROP TABLE meals

CREATE TABLE meals (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  edited TIMESTAMP NOT NULL DEFAULT NOW()  
);

INSERT INTO meals (name)
VALUES
('No meals'),
('Breakfast'),
('Breakfast, Lunch'),
('Brunch'),
('Dinner'),
('Welcome Dinner')
;