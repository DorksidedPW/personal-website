import React, { useState, useEffect } from 'react';
import './content.css';

const Content = (props) => {
  const [content, getContent] = useState([]);
  const [title, getTitle]     = useState([]);

  useEffect(() => {
    const getPageContent = async () => {
      const response = await fetch('https://www.paulwassen.nl/wp-json/wp/v2/pages/2');
      const data = await response.json();
      getContent(data.content.rendered);
      getTitle(data.title.rendered)
    }
    getPageContent();
  }, [])

  return(
    <div className='content' > 
      <h1 dangerouslySetInnerHTML={{__html: title}}></h1> 
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
    );
}

export default Content;