-- If your DB allows extensions, you can enable UUID helpers; otherwise we generate UUIDs in Node.
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS admins (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image_home TEXT,
  media1 TEXT,
  rich_text TEXT,
  media2 TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  minute_read INT NOT NULL,
  date DATE NOT NULL,
  rich_text1 TEXT,
  image1 TEXT,
  image2 TEXT,
  rich_text2 TEXT,
  video TEXT,
  rich_text3 TEXT,
  conclusion TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS homepage_links (
  id SERIAL PRIMARY KEY,
  youtube_link1 TEXT,
  youtube_link2 TEXT,
  youtube_link3 TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

INSERT INTO homepage_links (youtube_link1, youtube_link2, youtube_link3)
VALUES ('https://www.youtube.com/watch?v=default1', 'https://www.youtube.com/watch?v=default2', 'https://www.youtube.com/watch?v=default3');

