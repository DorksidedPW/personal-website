import React, { useState, useEffect } from 'react';
import {
  useParams,
} from "react-router-dom";

const Pagecontent = (props) => {
  const params = useParams();

  const [content, getContent] = useState({
    content: '',
    title: '',
    author: '',
    date: '',
  });
 
  useEffect(() => {
    const getPosts = async () => {
      const id = params.id;
      
      const response = await fetch(`https://www.paulwassen.nl/wp-json/wp/v2/posts?include=${id}`);
      const data = await response.json();

      const structData = (data) => {
        const { content, title, author } = data[0];
        getContent({
          content: content.rendered,
          title: title.rendered,
          author: author
        });
      }
      structData(data)
    }
    getPosts();
  }, [])

  return(
    <div className='content'>
      <h1 dangerouslySetInnerHTML={{__html: content.title}}></h1> 
      <div dangerouslySetInnerHTML={{__html: content.content}}></div>
    </div>
  );
}

export default Pagecontent;