DROP TABLE itenerary;

CREATE TABLE itenerary (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  included_meal_id integer NOT NULL,
  content VARCHAR(1000) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  edited TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY (included_meal_id) REFERENCES meals(id)
);

INSERT INTO itenerary (title, included_meal_id, content)
VALUES 
('Arrival in Tokyo', 1, 'Enjoy a free day in Tokyo or add an excursion.'),
('Arrival in Kyoto', 2, 'Enjoy a free day in Kyoto or add an excursion.'),
('Sightseeing tour of Tokyo', 3, "Embark on your tour of Japan's capital.\r\n- Make a photo stop and view the iconic Shibuya crossing from overhead as you drive through the central part of the city.\r\n- Set off on a short walk from Yoyogi Park to the Meiji Shrine, final resting place of Emperor Meiji\r\n- Stroll through the colorful Harajuku neighborhood, where Tokyo’s history and present-day pop culture intertwine")
;