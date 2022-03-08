import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './../article/Article'
import './Leadstory.css';

export default function Leadstory() {

    const [data, setData] = useState( [] );

    async function getArticles() {
    const data = (await axios.get('http://localhost:8000/leadstory')).data;
    setData(data);
  }

    useEffect(() => {
    getArticles()
   }, []);

    function displayMedia(type, url) {
     return <img src={"http://localhost:8000/media/" +url} />
   }


    if (data.length == 0) {
    return(<div>
        Loading data...
        </div>);
    }

    return (<div>
          {data.map( x =>  <article key={x.id}>
                              <h1 className="Article_title">{x.title}</h1>
                              <section dangerouslySetInnerHTML={{__html: x.content}}></section>
                              {displayMedia(x.mediaType,x.mediaURL)}
                           </article>
           )}

        </div>
    );
}