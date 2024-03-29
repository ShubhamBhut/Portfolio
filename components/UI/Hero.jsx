import React from 'react'
import SectionSubtitle from './SectionSubtitle'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/images/logo-s.png'
import classes from '../../styles/hero.module.css'

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
         <Row>
            <Col lg='6' md='6'>
               <div className={`${classes.hero__content}`}>
                  <SectionSubtitle subtitle='Hello' />
                  <h2 className='mt-3 mb-3'>I&apos;m Shubham Patel</h2>
                  <h5 className='mb-4'>Deep Learning, Blockchain and Rust developer</h5>
                  <p>I am a Deep Learning, Blockchain and Rust enthusiast with particular interest on solving finance related problems through data-driven insights and Deep Learning.</p>
                  <p>Currently I am learning Graph networks and improving my Rust.</p>

                  <div className='mt-5'>
                     {/* <button className="primary__btn"><Link href='#'>Hire me</Link></button> */}

                     <button className="primary__btn"><Link href='https://drive.google.com/file/d/1XgIJLVKnYRowmm0RTtbkL_iOy8S4Ty74/view?usp=sharing'>Checkout My CV</Link></button>

                  </div>
               </div>
            </Col>

            <Col lg='6' md='6'>
               <div className={`${classes.hero__img} text-end`}>
                  <Image alt='hero-image' src={heroImg} width='300' height='400' />

                  {/* <div className={`${classes.hero__skills}`}>
                     <h6>Skills</h6>
                     <span>
                        <i className="ri-bar-chart-line"></i>
                     </span>
                     <span>
                        <i className="ri-bar-chart-line"></i>
                     </span>
                     <span>
                        <i className="ri-bar-chart-line"></i>
                     </span>
                     <span>
                        <i className="ri-bar-chart-line"></i>
                     </span>
                     <span>
                        <i className="ri-bar-chart-line"></i>
                     </span>
                     <span>
                        <i className="ri-bar-chart-line"></i>
                     </span>
                  </div> */}

                  {/* <div className={`${classes.hero__experience} d-flex align-items-center gap-3`}>
                     <span><i className="ri-lightbulb-flash-line"></i></span>
                     <div className="bg-transparent">
                        <h6>Experience</h6>
                        <h5 className="mb-0">1 Year</h5>
                     </div>
                  </div> */}

               </div>
            </Col>
         </Row>
      </Container>
    </section>
  )
}

export default Hero
