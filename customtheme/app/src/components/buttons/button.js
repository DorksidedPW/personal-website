import React from 'react';
import './button.css';

const Button = (props) => {
  const {label} = props;

  const buttonClick = () => {}

  return(
    <button
      onClick={buttonClick}
      className='button-base primary'
      tabindex="0"
    >
      {label}
    </button>
  )
}

export default Button; 