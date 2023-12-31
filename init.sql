CREATE TABLE books(
    id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    title VARCHAR(100) UNIQUE NOT NULL,
    img_link TEXT NOT NULL,
    bg_img_link TEXT NOT NULL
);
CREATE TABLE chapters(
    id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    book_id INTEGER NOT NULL,
    title VARCHAR(100) NOT NULL,
    audio_link TEXT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books(id)
);
