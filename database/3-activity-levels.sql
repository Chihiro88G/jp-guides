CREATE TABLE activity_levels (
  id integer PRIMARY KEY AUTO_INCREMENT,
  level_name VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  edited TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO activity_levels (level_name)
VALUES
('modest'),
('high'),
('very high')
;