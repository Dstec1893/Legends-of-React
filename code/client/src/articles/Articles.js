import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Article from './../article/Article'
import "./Articles.css";


export default function Articles() {

  const [data, setData] = useState( [] );

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/articles')).data;
    setData(data);
  }


   useEffect(() => {
    getArticles()
   }, []);

   function displayMedia(type, url) {
     return <img src={"http://localhost:8000/media/" +url} />
   }

   let navigate = useNavigate();

    return (
       <>
        <h1>
            Articles !!
        </h1>
          {data.map( x =>  <article  key={x.id}>
                              <Link to={"/article/"+ x.id}> <h1 className="Article_title">{x.title}</h1></Link>
                              <section dangerouslySetInnerHTML={{__html: x.content}}></section>
                              {displayMedia(x.mediaType,x.mediaURL)}
                           </article>
           )}
      </>
    );
}
