import React from 'react';
import './button.css';

const Button = (props) => {
  const {label} = props;

  const buttonClick = () => {}

  return(
    <button
      onClick={buttonClick}
      className='button-base primary'
      tabIndex="0"
    >
      {label}
    </button>
  )
}

export default Button; 