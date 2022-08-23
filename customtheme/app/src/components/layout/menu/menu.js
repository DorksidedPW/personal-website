import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import './menu.css';

const Menu = (props) => {
  return(<nav className='main_menu'>
    <ul>
      <li><Link to={`/app/`}>Interne link</Link></li>
    </ul>
  </nav>)
}

export default Menu; 