DROP TABLE tours;

CREATE TABLE tours (
  id integer PRIMARY KEY AUTO_INCREMENT,
  tour_name VARCHAR(255) NOT NULL,
  total_days integer NOT NULL,
  group_size_min integer NOT NULL,
  group_size_max integer NOT NULL,
  net_price_cad integer NOT NULL,
  discount_id integer DEFAULT 0,
  review integer,
  activity_level_id integer NOT NULL,
  overview_title TEXT NOT NULL,
  overview_content TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  edited TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY (discount_id) REFERENCES discounts(id),
  FOREIGN KEY (activity_level_id) REFERENCES activity_levels(id)
);

INSERT INTO tours (tour_name, total_days, group_size_min, group_size_max, net_price_cad, discount_id, review, activity_level_id, overview_title, overview_content)
VALUES
(
  'Explore the old capital city, Kyoto', 2, 5, 10, 1200, 1, 4, 2, 'Visit the 5 most popular places in Kyoto.', 
  "If you like to see old, historical, and magnificent temples and shrines, this tour is for you. You can visit Golden Temple, Fushimi Inari's 1000 shrines, Kiyomizu Temple, Heian Jingu Shrine, and Yasaka Shrine.
  The hotel you'll stay has been operating for 120+ years in the central Kyoto with Tatami rooms and Onsen."
),
(
  'Highlights of Japan: Tokyo to Kyoto', 7, 10, 15, 2500, 1, 3.5, 2, 'Discover how old traditions coexist with cutting-edge culture.',
  "You'll experience the Zen aesthetic every day of your tour — and not only while drinking tea. Uncover ancient temples alongside futuristic cityscapes and witness how Japan's art, architecture, and new culture reflect its time-honored philosophies."
),
(
  'Japan for Solo Travelers', 9, 15, 30, 5600, 1, 4.0, 3, 'Get to know Japan from Mt. Fuji to Kyoto. Nature, food, and culture.',
  "For many solo travelers, navigating the country's language and social etiquette alone can be overwhelming. But on this journey, you'll spend a week exploring with other solo travelers, and of course an expert tour director who will guide you from Tokyo to majestic Mt.Fuji to utterly charming Kyoto."
),
(
  'North of Japan: Hokkaido', 5, 15, 20, 1800, 1, 4.0, 3, 'Discover the north! Stunning nature, ramen, and fresh fish',
  "Hokkaido is known for skiing for sure, while there are so many spots to visit. This tour includes exploring fish market and savory factory making sweets using local fresh milk and cheese."
),
(
  'South of Japan: Okinawa and Fukuoka', 5, 10, 20, 900, 1, 4.5, 1, 'Visit Okinawa and Fukuoka, where you will see different culture and enjoy various local food!',
  "Okinawa is the destination for those who enjoy beach / island trips. Okinawa's culture is sometimes isolated from the mainland Japan as located. In Fukuoka, only 2 hours away from Korea, you must eat seafood and Hakata style ramen"
)
;