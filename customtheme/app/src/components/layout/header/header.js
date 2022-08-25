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
          <a id='logo' href={'#banner-group'}>VITAMINE<b style={{color: '#F47A7A'}}>BYTES</b></a>
        </div>
        <Menu />
      </div>
    </>
  )
}

export default Header;