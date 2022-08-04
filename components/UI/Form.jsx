import React from 'react'
import classes from '../../styles/form.module.css'

const Form = () => {

  return <form action='https://getform.io/f/8c255216-0909-44c2-800f-6d95dc18390a' className={`${classes.form}`} method='POST'>
   <div className={`${classes.form__group}`}>
      <input type='text' name='name' placeholder='Your Name' required />
   </div>
   <div className={`${classes.form__group}`}>
      <input type='email' name='email' placeholder='Email Address' required />
   </div>
   <div className={`${classes.form__group}`}>
      <textarea type='text' name='message' rows={5} placeholder='Message'required />
   </div>

   <button className="primary__btn" type='submit'>Send</button>
   
  </form>
}

export default Form