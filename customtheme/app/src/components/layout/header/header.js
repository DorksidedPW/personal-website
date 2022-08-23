import React from 'react';
import Menu from '../menu/menu';
import IconButton from '../../buttons/iconbutton';
import { mdiAccount, mdiWhatsapp, mdiCellphone } from '@mdi/js'
import {
  Link
} from "react-router-dom";
import './header.css';

const Header = (props) => {
  return(
    <div id='header'>
      <div id='logo-container'>
          <Link id='logo' to={'/'}>SANDBOX</Link>
        <span>User interface | User interaction design</span>
      </div>
      <Menu />
      <div className='header button-container'>
        <IconButton icon={mdiCellphone} />
        <IconButton icon={mdiWhatsapp} />
        <IconButton icon={mdiAccount} />
      </div>
    </div>
  )
}

export default Header;