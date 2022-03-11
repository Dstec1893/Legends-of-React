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

    .delete("/articles/:id", (req,res)=> {
        let id = req.params.id;

        db.run("delete from article where id="+id,
        (err) => {
            if(err)
            {
            console.log("An Error has occured")
            return res.status(500).json(err);
            }
                    console.log("successful")
                    res.status(200).send()
        }
    )})

    .post("/articles", (req,res) =>
        {

                let title = req.body.title 
                let content = req.body.content
                let thumbnailURL = req.body.content
                let mediaType = req.body. mediaType
                let mediaUrl = req.body.mediaUrl


                db.run("INSERT INTO article (title, content, thumbnailURL, mediaType, mediaUrl) values (?,?,?,?,?)", 
                [title, content, thumbnailURL, mediaType, mediaUrl], (err) =>
                {
                    if(err)
                    {
                    console.log("An Error has occured")
                    return res.status(500).json(err);
                    }
                            console.log("successful")
                            res.status(200).json({
                            success: "true",
                            message: "article successful",

                    })
                })
        })


        .put("/articles/:id", (req,res) =>
        {
                let title = req.body.title 
                let content = req.body.content
                let thumbnailURL = req.body.content
                let mediaType = req.body. mediaType
                let mediaUrl = req.body.mediaUrl


                db.run("UPDATE article SET(title, content, thumbnailURL, mediaType, mediaUrl) values (?,?,?,?,?)", 
                [title, content,thumbnailURL, mediaType, mediaUrl], (err) =>
                {
                if(err)
                {
                   return res.status(500).json(err);
                }
                       res.json(200).json({
                       success: "true",
                       message: "article editing successful"


               })
               })
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


    