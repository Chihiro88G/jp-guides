CREATE TABLE discounts (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  discount_rate integer NOT NULL,
  min_party integer DEFAULT NULL,
  active integer NOT NULL CHECK (active IN (0, 1)),
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  edited TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO discounts (name, discount_rate, min_party, active)
VALUES
('No Promo', 0, NULL, 1),
('Summer Promo', 20, NULL, 0),
('Referral Promo', 10, NULL, 0),
('March Break Family Trip Promo', 25, 4, 0)
;
