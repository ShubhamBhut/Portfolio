import React from 'react'
import classes from '../../styles/form.module.css'

const Form = () => {

   async function handleOnSubmit(e) {
      e.preventDefault();
      const formData = {}
      Array.from(e.currentTarget.elements).forEach(field =>{
         if( !field.name ) return;
         formData[field.name] = field.value;
      });
      fetch('/api/mail', {
         method: "post",
         body: JSON.stringify(formData)
      })

      console.log(formData)
   }


  return <form action='https://getform.io/f/8c255216-0909-44c2-800f-6d95dc18390a' className={`${classes.form}`} method='POST' onSubmit={handleOnSubmit}>
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