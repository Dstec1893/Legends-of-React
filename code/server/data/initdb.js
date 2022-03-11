

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
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('JEU DE VALET', '<h1>Summary</h1><p>In the « jeu de valets » the point of the game is to have a less point as possible untill someone reaches 50 points. If someone does the game ends and he lost while the player having the smallest amount of points is the winner of the game.</p>', 'ecoal.jpg', 'image', 'valets4.jpg', 'FRANCE', '4', 'CARDGAME', 'jeu_des_valets.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('SUECA', '<h1>Summary</h1><p>The « Sueca » is a game that’s played in team in a 2 versus 2 game. Playing around a specific cards ranking and considering the announced trump color pour the hand, the point is to win with your partner a total of 4 hands to win the set and being considered as winners.</p>', 'ecoal.jpg', 'image', 'sueca.jpg', 'PORTUGAL', '4', 'CARDGAME', 'sueca2.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('PETITS CHEVAUX', '<h1>Summary</h1><p>The winning condition in the « petits chevaux » game is to get all of your horses to the cup after making them an entire round of the board</p>', 'ecoal.jpg', 'image', 'petits-chevaux.jpg', 'FRANCE', '4', 'BOARDGAME', 'petits_chevaux.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('IRISH SKITTLES', '<h1>Summary</h1><p>The goal of the «irish skittles» game is the knock the pins by throwing a stick on them to collect as much points as possible by summing the numbers on the pins.</p>', 'ecoal.jpg', 'image', 'irish_skittles.jpg', 'IRELAND', 'MORE', 'OUTDOORGAME', 'irish-skittles.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('BURRO', '<h1>Summary</h1><p>The objective of the game is to run out of cards as quickly as possible. Each time one of the players lose, they are assigned a letter of the word burro. The player who is first to complete the word becomes the ultimate loser of the game. The final winner will be the player who has failed to complete the word when others do. To win a game a player must place their hand face down in the middle of the table.</p>', 'ecoal.jpg', 'image', 'transferir.jpg', 'SPAIN', '4', 'CARDGAME', 'Burro.png')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('BRIDGE', '<h1>Summary</h1><p>Bridge is a member of the family of trick-taking games and is a derivative of whist, which had become the dominant such game and enjoyed a loyal following for centuries. The idea of a trick-taking 52-card game has its first documented origins in Italy and France. The French physician and author Rabelais (1493–1553) mentions a game called 'La Triomphe' in one of his works. In 1526 the Italian Francesco Berni wrote the oldest known (as of 1960) textbook on a game very similar to whist, known as 'Triomfi'. Also, a Spanish textbook in Latin from the first half of the 16th century, 'Triumphens Historicus', deals with the same subject </p>', 'ecoal.jpg', 'image', 'Bridge.jpg', 'UNITED KINGDOM', '4', 'CARDGAME', 'Bridge-fond.png')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('SCOPA', '<h1>Summary</h1><p>Points are awarded at the completion of each deal. If playing in teams, the team members combine their captured cards before counting to calculate points. Players get one point foreach 'scopa'.</p>', 'ecoal.jpg', 'image', 'Italian.jpg', 'ITALY', '3', 'CARDGAME', 'Scopa.png')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('TWENTY-FIVE', '<h1>Summary</h1><p>The « twenty-five » is a game where the point is to win 3 out of 5 five tricks. Players put a token on the pool to play the round. Game ends for you if you run out of token and definitly ends when someone earned all the tokens. </p>', 'ecoal.jpg', 'image', 'ireland.jpg', 'IRELAND', '5', 'CARDGAME', 'twenty-five.jpg')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('JOGO DA MALHA', '<h1>Summary</h1><p>The player or players of the team and their opponents throw the meshes, trying to knock down the pin of the other head and/or get the mesh as done as possible and so on.</p>', 'ecoal.jpg', 'image', 'transferir_1.jpg', 'PORTUGAL', '4', 'OUTDOORGAME', 'Jogo_de_malha.png')",
"INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL, origin, nbplayer, type, moreContent) values ('KEMPS', '<h1>Summary</h1><p>The game is played with a standard 52-card deck. The objective of Kemps is for a player to get four-of-a-kind (i.e., four cards of the same rank), and then to signal this to their partner. The partner must call the name of the game to score. Prior to the game, partners confer to pick a single, secret visual signal that will indicate 'I have four-of-a-kind' to their partner. Examples of signals would be tapping, gesturing, or holding cards a certain way, or the player winking or grimacing at their partner. Signals may not be verbal, and players are not permitted to agree any other signals beyond 'I have four-of-a-kind'. It is permissible to perform meaningless signals during the game to confuse opponents.</p>', 'ecoal.jpg', 'image', 'kemps.jpg', 'PORTUGAL', 'MORE', 'CARDGAME', 'kemps.png')",
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
