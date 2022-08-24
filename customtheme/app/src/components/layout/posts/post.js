import React, { useState, useEffect } from 'react';

const Post = (props) => {
  const {post} = props;
  const title = post.title.rendered;
  const excerpt = post.excerpt.rendered;
  const imgSrc = post.featured_media_src_url;
  const link = post.link;

  return(
    <div className='post'>
      <div
        className='image-container'
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      >
        <div className='post-title-container '>
          <span className='post-cat'>UI/UX</span>
          <h3 dangerouslySetInnerHTML={{__html: title}}></h3>
        </div>
      </div>
      <div className='content-container'>
        <span dangerouslySetInnerHTML={{__html: excerpt}}></span>
        <a  href={link}>Meer informatie</a>
      </div>
    </div>
  );
}

export default Post;

// <h1 dangerouslySetInnerHTML={{__html: title}}></h1> 
// <div dangerouslySetInnerHTML={{__html: content}}></div>