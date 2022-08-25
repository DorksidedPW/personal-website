import React from 'react';
import {
  Link
} from "react-router-dom";
import './menu.css';

const Menu = (props) => {
  return(<nav className='main_menu'>
    <ul>
      <li><a href='#UIUX'>UI/UX</a></li>
      <li className='link-alpha'><Link to={`/app/`}>SANDBOX</Link></li>
      <li><a className='featured' href='#contact'>Neem contact op</a></li>
    </ul>
  </nav>)
}

export default Menu; 