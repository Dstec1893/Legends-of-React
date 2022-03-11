

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
"CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, content TEXT NOT NULL, thumbnailURL TEXT, mediaType TEXT, mediaURL TEXT, leadStory INTEGER, origin TEXT, nbplayer TEXT, type TEXT, moreContent TEXT)",
"create table user(id integer primary key,username varchar,email varchar, password varchar)",
"CREATE TABLE tag (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)",
"CREATE TABLE article_tag (id INTEGER PRIMARY KEY AUTOINCREMENT, idArticle INTEGER REFERENCES article(id), idTag INTEGER REFERENCES tag(id))",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('JEU DE VALET', '<h1>Summary</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'valets4.jpg', 'FRANCE', 4, 'CARDGAME', 'jeu_des_valets.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('SUECA', '<h1>Summary</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'sueca.jpg', 'PORTUGAL', 4, 'CARDGAME', 'sueca2.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('PETITS CHEVAUX', '<h1>Summary</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'petits-chevaux.jpg', 'FRANCE', 4, 'BOARDGAME', 'petits_chevaux.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('IRISH SKITTLES', '<h1>Summary</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'irish_skittles.jpg', 'IRELAND', +10, 'OUTDOORGAME', 'irish-skittles.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('BURRO', '<h1>Summary</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'transferir.jpg', 'SPAIN', 4, 'CARDGAME', 'Burro.png')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('BRIDGE', '<h1>Summary</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'Bridge.jpg', 'UNITED KINGDOM', 4, 'CARDGAME', 'Bridge-fond.png')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('SCOPA', '<h1>Summary</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'Italian.jpg', 'ITALY', 3, 'CARDGAME', 'Scopa.png')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('TWENTY-FIVE', '<h1>Summary</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'ireland.jpg', 'IRELAND', 5, 'CARDGAME', 'twenty-five.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('JOGO DA MALHA', '<h1>Summary</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'transferir_1.jpg', 'PORTUGAL', 4, 'OUTDOORGAME', 'Jogo_de_malha.png')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('KEMPS', '<h1>Summary</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>', 'ecoal.jpg', 'image', 'kemps.jpg', 'PORTUGAL', +10, 'CARDGAME', 'kemps.png')",
"INSERT INTO tag (name) values ('ecoal22')",
"INSERT INTO tag (name) values ('reactJS')",
"INSERT INTO article_tag (idArticle, idTag) values (1,1)",
"INSERT INTO article_tag (idArticle, idTag) values (1,2)",
"INSERT INTO user (username, email, password) values ('Admin', '@admin@admin.com', 'admin')"
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
