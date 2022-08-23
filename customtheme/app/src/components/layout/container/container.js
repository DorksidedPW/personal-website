import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Content from '../content/content';

const Container = (props) => {
	return(
			<div className='parallax'>
				<Content />
			</div>
	);
}

export default Container;