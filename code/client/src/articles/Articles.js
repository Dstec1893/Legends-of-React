import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Article from './../article/Article'
import Articles_tag from './../articles_tag/Articles_tag'
import ListArticles from './../ListArticles/listearticles'


export default function Articles() {

  const [data, setData] = useState( [] );

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/articles')).data;
    setData(data);
  }


   useEffect(() => {
    getArticles()
   }, []);

   return (
      <ListArticles data={data}/>
    );

}
