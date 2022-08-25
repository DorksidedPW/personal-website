import React from 'react';
import Icon from '@mdi/react'
import './button.css';

const IconButton = (props) => {
  const{icon} = props;

  return(
    <button className='button-base icon-button'>
      <Icon path={icon} size={'14px'}/>
    </button>
  )

}

export default IconButton; 