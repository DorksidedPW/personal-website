import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
  const {post} = props;
  const title = post.title.rendered;
  const excerpt = post.excerpt.rendered;
  const imgSrc = post.featured_media_src_url;
  const link = post.link;
  const linkTo = `post${post.id}`;

  return(
    <div className='post'>
      <Link to={linkTo}>
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
      </Link>
      <div className='content-container'>
        <span dangerouslySetInnerHTML={{__html: excerpt}}></span>
        <li><Link to={linkTo}>Lees meer</Link></li>
      </div>
    </div>
  );
}

export default Post;