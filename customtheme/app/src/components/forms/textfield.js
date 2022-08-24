import React, { useState, useEffect } from 'react';
import './formstyle.css';

const Textfield = (props) => {
  return(
    <form>
      <label className='label' for={props.id}>{props.label}</label>
      <input
        id={props.id}
        placeholder={props.placeholder}
        className='textfield'
        type='text'
      />
    </form>
  )
}

export default Textfield; 