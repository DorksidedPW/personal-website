import React from 'react';
import Header from '../header/header';
import Pagecontent from '../content/pagecontent.js'
import './container.css';
import '../../../styles/parallax.css'

const PageContainer = (props) => {
	return(
			<div id='container' className='parallax'>
        <Header />
        <Pagecontent />
      </div>
	);
}

export default PageContainer;