const express = require("express");
const routes = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/ecoalDB');

module.exports = routes;

routes
    .get("/", (req, res) => {
        res.json("Hello world!!");
    })

    .get("/leadstory", (req, res) => {
            db.all(
                     "select * from article order by id desc limit 3",
                     (err, rows) => res.json(rows)
          );

    })


    .get("/articles", (req,res) => {
            db.all(
                     "select * from article",
                     (err, rows) => res.json(rows)
          );

    })


    .get("/article/:id", (req, res) => {

    let myId = req.params.id;
    
    /*console.log(req.params);*/

    /*let command = "select * from article where id = "+ myId;*/
    
    /*console.log(command);*/
    
    db.all(
                     "select * from article where id = "+ myId,
                     (err, rows) => res.json(rows)
          );
})
