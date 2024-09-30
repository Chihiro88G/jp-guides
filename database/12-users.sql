DROP TABLE users;

CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(80) NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  edited TIMESTAMP NOT NULL DEFAULT NOW(),
  reset_token VARCHAR(200),
  reset_token_expiry_date TIMESTAMP
);

INSERT INTO users (name, password, email)
VALUES
('Willy', 'pw-willy-123', 'willy@gmail.com')
;