import React, { useState, useEffect } from 'react';
import Textfield from '../../forms/textfield'
import Textarea from '../../forms/textarea'
import Selectfield from '../../forms/selectfield'
import Button from '../../buttons/button'
import './contact.css';

const Contact = (props) => {
  const[mailData, setMailData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const setFieldValue = (id, value) => {
    setMailData(prevState => {return {...prevState, [id]:value}})
  }

  const sendMail = () => {}

  const questionOptions = ([
    {id: 1},
    {id: 2, label: 'Meer informatie over UI', value: 1},
    {id: 3, label: 'Meer informatie over toegangkelijkheid', value: 2},
  ])

  return(
    <div id='contact-form'>
      <h2 className='subtitle' id='contact'>
        Categorie subtitle style
      </h2>
      <div id='contact-container'>
        <div className='form-container'>
          <Textfield id='name' value={mailData.name} placeholder='Naam' label='Vul hier je naam in' onChange={setFieldValue}/>
          <Textfield id='email' value={mailData.email} placeholder='E-mail adres' label='Je e-mail adres' onChange={setFieldValue}/>
          <Selectfield label='Ik wil graag:' options={questionOptions} id='subject'/>
          <h4 style={{marginTop: 16, marginBottom: 16, fontStyle: 'italic'}}>Wil je graag met iets anders geholpen worden? Laat me het weten!</h4>
          <Textarea id='message' value={mailData.message} placeholder='Waar kan ik mee helpen?' label='Ik wil het graag over iets anders hebben' onChange={setFieldValue}/>
          <Button onClick={sendMail} label='Verstuur bericht'/>
        </div>
      </div>
    </div>
  )
}

export default Contact; 