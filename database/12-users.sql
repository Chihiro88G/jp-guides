DROP TABLE users;

CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(80) NOT NULL,
  password VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  edited TIMESTAMP NOT NULL DEFAULT NOW()  
);

INSERT INTO users (name, password, email)
VALUES
('Willy', 'pw-willy-123', 'willy@gmail.com')
;