import React from 'react';
import './formstyle.css';

const Selectfield = (props) => {
  const {options} = props;

  const onChange = (e) => {
    if(props.onChange) props.onChange(props.id, e.target.value);
  }

  return(
    <form>
      <label className='label' htmlFor={props.id}>{props.label}</label>
      <select className='selectfield' tabIndex={0} onChange={onChange}>
        {(options.map(function(option){
          return(<option tabIndex={0} key={option.id}>{option.label}</option>)
        }))}
      </select>
      <span>Helper text</span>
    </form>
  )
}

export default Selectfield; 