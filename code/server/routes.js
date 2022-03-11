const express = require("express");
const routes = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/ecoalDB');

const verify=require('./connectionRouter').verify;

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

    .get("/articles_tag/:tag", (req, res) => {

    let myTag = req.params.tag;
    
    db.all(
                     "SELECT article.* from article join article_tag on idArticle=article.id JOIN tag on idTag=tag.id WHERE tag.name = ?", [myTag],
                     (err, rows) => res.json(rows)
          );
})



    