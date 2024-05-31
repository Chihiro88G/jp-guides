CREATE TABLE destinations (
  id integer PRIMARY KEY AUTO_INCREMENT,
  city_name VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  edited TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO destinations (city_name)
VALUES
('Tokyo'),
('Osaka'),
('Kyoto'),
('Nara'),
('Okinawa'),
('Hokkaido'),
('Fukuoka')
;