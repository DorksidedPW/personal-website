import React, { useState, useEffect } from 'react';
import Post from './post'
import './posts.css';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('https://www.paulwassen.nl/wp-json/wp/v2/posts?categories=3');
      const data = await response.json();
      setPosts(data)
    }
    getPosts();
  }, [])

  
  return(
    <div className='posts-section'>
      <h2 className='subtitle' id='UIUX'>
        Categorie subtitle style
      </h2>
      <div className='posts-container'>
        {(posts.map(function(post){
          //console.log(post)
          return(<Post key={post.id} post={post}/>)
        }))}
      </div>
    </div>
  );
}

export default Posts;