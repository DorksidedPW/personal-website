import React, { useState, useEffect, useRef} from 'react';
import Header from '../header/header';
import Content from '../content/content';
import Contact from '../contact/contact';
import Posts from '../posts/posts';
import './container.css';
import '../../../styles/parallax.css'

const Container = (props) => {
  const scrollRef = useRef(null);

	return(
			<div id='container' className='parallax' ref={scrollRef}>
        <Header />
          <div id='banner-group' className="parallax-group">
            <div id='banner' className="layer layer--back"></div>
            <div id='banner-content' className="layer layer--base section-padding">
              <div className='title-container'>
                <h1>User interface |<br /> User interaction design</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ex non 
                  is venenatis lacus. Sed semper nisl nisi, ac hendrerit mauris iaculis et. Curabitur erat eros, tempor at purus at, tristique varius erat.
                </p>
            </div>
          </div>
        </div>
        <Content />
        <Posts />
        <Contact />
      </div>
	);
}

export default Container;