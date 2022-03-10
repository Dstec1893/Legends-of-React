import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import ListArticles from './../ListArticles/listearticles'


export default function Articles_tag(){


  let params = useParams();


  const [data, setData] = useState( [] );

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/articles_tag/' + params.tag)).data;
    setData(data);
  }


   useEffect(() => {
    getArticles()
   }, []);


    return (
      <ListArticles data={data}/>    
      );




}