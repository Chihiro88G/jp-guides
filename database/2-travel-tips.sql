CREATE TABLE travel_tips (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO travel_tips (title, content)
VALUES
('When to visit Japan', 'Anytime a year! March to April to see cherry blossoms. January to Feburary to ski.'),
('Where to visit in Japan as a beginner', 'Tokyo, Kyoto, Osaka, Nara, Hiroshima, Fukuoka, Kobe')