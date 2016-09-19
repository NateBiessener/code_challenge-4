-- Database name treats

-- Document you create tables pSQL here
CREATE TABLE treat (
  id SERIAL PRIMARY KEY, name VARCHAR(64), description VARCHAR(200), pic VARCHAR(200)
);

INSERT INTO treat (name, description, pic) VALUES ('cupcake', E'It\'s like a cake that was hit with a shrink ray', 'assets/cupcake.jpg');

INSERT INTO treat (name, description, pic) VALUES ('donut', E'It\'s like a small cake that was shot with a pellet gun, then covered in icing', 'assets/donuts.jpg');

INSERT INTO treat (name, description, pic) VALUES ('goldfish', E'It\'s like a cake that was actually a piece of cheese cut in the outline of a fish, then baked for a bit', 'assets/goldfish.jpg');

INSERT INTO treat (name, description, pic) VALUES ('icecream', E'It\'s like a piece of cake that was served to you after the host ate the piece of cake', 'assets/icecream.jpg');

INSERT INTO treat (name, description, pic) VALUES ('potato', E'It\'s like a cake that was a lie. Now it\'s a potato.', 'assets/potato.jpg');
