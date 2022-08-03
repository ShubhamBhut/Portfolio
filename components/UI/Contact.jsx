import React from 'react'
import classes from '../../styles/contact.module.css'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import SectionSubtitle from './SectionSubtitle'
import Form from './Form'

const Contact = () => {
  return <section id='contact' className={`${classes.contact}`}>
   <Container>
      <Row>
        <Col lg='6' md='6'>
         <SectionSubtitle subtitle='Contact me' />
         <h3 className='mt-4 mb-4'>Hit me an email</h3>
         <p>I am always ready to explore new opportunities and contribute. My inbox is always open whether you have a question or just want to say hi!, send me a message and I will get back to you as soon as possible.</p>

         <ul className={`${classes.contact__info__list}`}>
            <li className={`${classes.info__item}`}>
               <span><i className="ri-map-pin-line"></i></span>
               <p>Rajkot - India</p>
            </li>
            <li className={`${classes.info__item}`}>
               <span><i className="ri-mail-line"></i></span>
               <p>shubhamprecious1@gmail.com</p>
            </li>
            <li className={`${classes.info__item}`}>
               <span><i className="ri-phone-line"></i></span>
               <p>+918128087586</p>
            </li>
         </ul>

         <div className={`${classes.social__links}`}>
            <Link href='https://github.com/ShubhamBhut'><span><i className="ri-github-fill"></i></span></Link>
            {/* <Link href='#'><span><i class="ri-facebook-line"></i></span></Link> */}
            <Link href='https://www.linkedin.com/in/shubham-patel-039789214/'><span><i className="ri-linkedin-line"></i></span></Link>
         </div>
        </Col> 

        <Col lg='6' md='6'>
         <Form />
        </Col> 

      </Row>
   </Container>
  </section>
}

export default Contact