

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./data/ecoalDB', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the ecoal database.');
    }
});


let query = [
"PRAGMA foreign_keys = ON",
"DROP TABLE IF EXISTS article_tag",
"DROP TABLE article",
"DROP TABLE IF EXISTS tag",
"CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, content TEXT NOT NULL, thumbnailURL TEXT, mediaType TEXT, mediaURL TEXT, leadStory INTEGER, origin TEXT, nbplayer INTEGER, type TEXT)",
"CREATE TABLE articles (id INTEGER PRIMARY KEY AUTOINCREMENT, thumbnailURL TEXT, mediaType TEXT, mediaURL TEXT)",
"CREATE TABLE moreArticle (id INTEGER PRIMARY KEY AUTOINCREMENT, moreContent TEXT NOT NULL)",
"create table user(id integer primary key,username varchar,email varchar, password varchar);",
"CREATE TABLE tag (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)",
"CREATE TABLE article_tag (id INTEGER PRIMARY KEY AUTOINCREMENT, idArticle INTEGER REFERENCES article(id), idTag INTEGER REFERENCES tag(id))",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type) values ('Welcome to ecoal22', '<h1>Premier</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'ecoal.jpg', 'FRANCE', 3, 'CARDGAME')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type) values ('Welcome to ecoal23', '<h1>Deuxième</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'ecoal.jpg', 'PORTUGAL', 5, 'BOARDGAME')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type) values ('Welcome to ecoal24', '<h1>Troisième</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'ecoal.jpg', 'FRANCE', 2, 'CARDGAME')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type) values ('Welcome to ecoal25', '<h1>Quatrièlme</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'ecoal.jpg', 'IRELAND', 6, 'BOARDGAME')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type) values ('Welcome to ecoal26', '<h1>Cinquième</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'ecoal.jpg', 'SPAIN', 9, 'CARDGAME')",
"INSERT INTO articles (thumbnailURL, mediaType, mediaURL) values ('ecoal.jpg', 'image', 'ecoal.jpg')",
"INSERT INTO tag (name) values ('ecoal22')",
"INSERT INTO tag (name) values ('reactJS')",
"INSERT INTO article_tag (idArticle, idTag) values (1,1)",
"INSERT INTO article_tag (idArticle, idTag) values (1,2)",
"INSERT INTO user (username, email, password) values ('Admin', '@admin@admin.com', 'admin')",
]


db.serialize( () => {

query.forEach(item => {
  db.run(item, err =>  {
    if (err)
      return console.error(err.message)
    console.log(item + ` done`)
  })
})

})

db.close(err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
