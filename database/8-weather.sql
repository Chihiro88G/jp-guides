DROP TABLE weather;

CREATE TABLE weather (
  id integer PRIMARY KEY AUTO_INCREMENT,
  month INTEGER NOT NULL,
  max_temp_tokyo INTEGER NOT NULL,
  rain_tokyo INTEGER NOT NULL,
  comments VARCHAR(500) NOT NULL
);

INSERT INTO weather (month, max_temp_tokyo, rain_tokyo, comments)
VALUES
(1, 10, 47, 'January in Japan is a time of serene beauty, with snow-covered temples and top-notch ski conditions in places like Hokkaido and Nagano. Many locals visit shrines for New Year''s prayers, offering a glimpse into traditional Japanese culture. However, the cold can be biting, and daylight hours are short, limiting outdoor activities.'),
(2, 10, 62, 'February continues the winter magic with events like the Sapporo Snow Festival, where massive ice sculptures light up the streets. The weather is ideal for onsen trips and hot spring stays. Still, persistent snow in northern Japan can complicate travel, and the chilly air can feel harsh for first-time visitors.'),
(3, 13, 101, 'March signals the transition from winter to spring, with plum blossoms and early cherry blossoms appearing in southern Japan. Festivals begin to return, and outdoor attractions become more enjoyable as temperatures warm. Yet the timing of full blooms varies each year, and early March can still be cold and windy.'),
(4, 19, 122, 'April is one of the most celebrated months to visit Japan, as cherry blossoms reach full bloom across much of the country. Streets, parks, and riversides fill with people enjoying hanami picnics beneath pink canopies. However, this popularity brings crowds, high accommodation prices, and fully booked trains.'),
(5, 23, 138, 'May delivers comfortable temperatures, colorful gardens, and mountain hiking opportunities. It''s one of the most pleasant times to enjoy Japan''s nature before the rainy season arrives. Yet Golden Week, a national holiday stretch, causes heavy crowds and price surges that can make travel stressful.'),
(6, 25, 184, 'In June, Japan''s countryside turns deep green under frequent rain, creating a peaceful and fresh atmosphere. Hydrangeas bloom in temples and gardens, offering pretty photo spots. Still, humidity rises significantly, and frequent rainfall can interfere with travel or outdoor plans.'),
(7, 29, 132, 'July kicks off summer festivals like Kyotos Gion Matsuri and marks the opening of Mount Fuji''s climbing season. Fireworks shows and evening street food stalls make the month lively and colorful. However, the heat and humidity can be intense, especially in crowded cities like Tokyo and Osaka.'),
(8, 31, 147, 'August is filled with vibrant cultural events such as the Obon holiday, where traditional dances and fireworks light up the night. Summer festivals in small towns bring an authentic local feel. Yet it''s also the peak of both temperatures and humidity, with occasional typhoons disrupting travel.'),
(9, 27, 185, 'September offers a quieter travel experience as summer crowds subside, and early autumn colors begin to appear in northern Japan. The weather is still warm, making sightseeing comfortable. Still, typhoon season continues, and heavy rains can affect flights and outdoor plans.'),
(10, 21, 174, 'October brings cool, refreshing air and beautiful autumn foliage spreading from the north to central Japan. It''s a wonderful time for hiking, exploring temples, and enjoying seasonal flavors like chestnuts and mushrooms. Occasional rainy days and early chills in northern regions can be drawbacks.'),
(11, 16, 90, 'November is one of the most scenic months, with fiery red and golden leaves covering temples, gardens, and mountain landscapes. The clear, crisp air is perfect for outdoor photography and exploring cultural sites. As the month progresses, temperatures drop sharply, especially in the evenings.'),
(12, 12, 50, 'December mixes festive city illuminations with peaceful winter scenery in rural Japan. Christmas markets, ramen stalls, and steaming onsen baths make the cold season cozy and inviting. Still, temperatures can plunge in many areas, and some attractions shorten hours due to early sunsets.')
;
