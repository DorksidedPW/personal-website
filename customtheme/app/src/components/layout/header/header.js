import React from 'react';
import Menu from '../menu/menu';
import {
  Link
} from "react-router-dom";
import './header.css';

const Header = (props) => {
  return(
    <>
      <div id='header'>
        <div id='logo-container'>
          <Link id='logo' to={'/'}>VITAMINE<b style={{color: '#F47A7A'}}>BYTES</b></Link>
          <span>User interface | User interaction design</span>
        </div>
        <Menu />
      </div>
    </>
  )
}

export default Header;