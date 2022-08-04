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

      console.log(formData)
   }


  return <form className={`${classes.form}`} method='post' onSubmit={handleOnSubmit}>
   <div className={`${classes.form__group}`}>
      <input type='text' placeholder='Your Name' required />
   </div>
   <div className={`${classes.form__group}`}>
      <input type='email' placeholder='Email Address' required />
   </div>
   <div className={`${classes.form__group}`}>
      <textarea type='text' rows={5} placeholder='Message'required />
   </div>

   <button className="primary__btn" type='submit'>Send</button>
   
  </form>
}

export default Form