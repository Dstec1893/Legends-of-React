import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Article() {

  const [data, setData] = useState( [] );

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/articles')).data;
    setData(data);
  }

  useEffect(() => {
    getArticles()
   }, []);


  
}