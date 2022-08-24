import React, { useState, useEffect } from 'react';
import Textfield from '../../forms/textfield'
import Textarea from '../../forms/textarea'
import Icon from '@mdi/react';
import { mdiCoffee } from '@mdi/js';
import './contact.css';

const Contact = (props) => {
  return(
    <div id='contact-form'>
      <h2 className='subtitle' id='contact'>
        Categorie subtitle style
      </h2>
      <div id='contact-container'>
        <div style={{width: '40%'}} className='title-container'>
            <h4 className='contact-intro'><Icon path={mdiCoffee} size={1.5}/> Neem contact op</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ex non 
              is venenatis lacus. Sed semper nisl nisi, ac hendrerit mauris iaculis et. Curabitur erat eros, tempor at purus at, tristique varius erat.
            </p>
        </div>
        <div style={{width: '60%'}}>
          <Textfield id='name' placeholder='Naam' label='Vul hier je naam in'/>
          <Textfield id='name' placeholder='Naam' label='Je e-mail adres'/>
          <Textarea id='name' placeholder='Naam' label='Je e-mail adres'/>
        </div>
      </div>
    </div>
  )
}

export default Contact; 