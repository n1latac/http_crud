CREATE TABLE Thing(
    body varchar(256) NOT NULL CHECK(body != '')
);
ALTER TABLE thing
ADD COLUMN id serial PRIMARY KEY;