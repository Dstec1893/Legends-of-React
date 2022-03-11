import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useCookies} from 'react-cookie';
import './Article.css';

export default function Article() {
 

  const [data, setData] = useState( null );

  let params  = useParams();

  const [cookies] = useCookies(['login']);
  const isConnected = cookies.login&&cookies.login.username;

  async function getArticle(id) {
    const data = (await axios.get('http://localhost:8000/article/'+ params.id)).data;
    setData(data);
  }

  useEffect(() => {
    getArticle(params.id)
   }, []);

   function displayMedia(type, url) {
     return <img className="img" src={"http://localhost:8000/media/"+url}/>
   }

   function displayMedia2(type, url) {
     return <img src={"http://localhost:8000/media/"+url}/>
   }


   if (data == null)
   	return <p>loading</p>;
  
 
   console.log(isConnected);

   let art = data[0];

   if (isConnected) {

    return (<div>
    {displayMedia(art.mediaType, art.moreContent)}
    </div>);


   }else{

    return (<div>
    <article key={art.id}>
     <h1> Il y a plus d'information </h1>
      <h1 className="Article_title">{art.title}</h1>
      <section dangerouslySetInnerHTML={{__html: art.content}}>
      </section>
      {displayMedia2(art.mediaType, art.mediaURL)}
   </article>
    </div>);

  }

}