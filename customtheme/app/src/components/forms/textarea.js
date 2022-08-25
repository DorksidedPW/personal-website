import React from 'react';
import './formstyle.css';

const Textarea = (props) => {
  return(
    <form>
      <label className='label' htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        className='textarea'
        type='text'
      />
    </form>
  )
}

export default Textarea; 