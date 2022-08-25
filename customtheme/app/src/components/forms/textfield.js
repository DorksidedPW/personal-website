import React, { useState, useEffect } from 'react';
import './formstyle.css';

const Textfield = (props) => {

  const onChange = (e) => {
    if(props.onChange) props.onChange(props.id, e.target.value);
  }

  return(
    <form>
      <label className='label' htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChange}
        className='textfield'
        type='text'
      />
      <span>Helper text</span>
    </form>
  )
}

export default Textfield; 