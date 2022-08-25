import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../header/header';
import Pagecontent from '../content/pagecontent.js'
import './container.css';
import '../../../styles/parallax.css'

const PageContainer = (props) => {
  const [scrolling, setScrolling] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log(scrollRef.current.offsetTop)
  },[scrollRef])

	return(
			<div id='container' className='parallax' ref={scrollRef}>
        <Header />
        <Pagecontent />
      </div>
	);
}

export default PageContainer;