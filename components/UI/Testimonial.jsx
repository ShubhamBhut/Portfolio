import React from 'react'
import classes from '../../styles/testimonial.module.css'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
import SectionSubtitle from './SectionSubtitle'
import network from '../../public/images/Connected world.png'
import Slider from 'react-slick'

const Testimonial = () => {

  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

 
  return <section>
    <Container>
      <Row>
        <Col lg='6' md='6' className={`${classes.testimonial__img}`}>
          <Image alt='network image' src={network} width='400' height='400' />
        </Col>

        <Col lg='6' md='6'>
          <SectionSubtitle subtitle='Testimonials' />
          <h4 className='mt-5 mb-5'>What my Classmates says</h4>

          <Slider {...settings}>
            <div className={`${classes.testimonial__item}`}>
              <div className={`${classes.testimonial__client}`}>
              <Image alt='client-img' src='/images/hero.jpg' width='50' height='50' className='rounded-2' />
              <div>
                <h6>John Doe</h6>
                <h6>Software Engineer</h6>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusamus sunt incidunt consequuntur accusantium perferendis omnis similique quaerat. Quaerat, quod.</p>
            </div>
            
            <div className={`${classes.testimonial__item}`}>
              <div className={`${classes.testimonial__client}`}>
              <Image alt='client-img' src='/images/hero.jpg' width='50' height='50' className='rounded-2' />
              <div>
                <h6>Steve Hoff</h6>
                <h6>Software Engineer</h6>
                </div>   
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusamus sunt incidunt consequuntur accusantium perferendis omnis similique quaerat. Quaerat, quod.</p>
            </div>

            <div className={`${classes.testimonial__item}`}>
              <div className={`${classes.testimonial__client}`}>
              <Image alt='client-img' src='/images/hero.jpg' width='50' height='50' className='rounded-2' />
              <div>
                <h6>Kye Green</h6>
                <h6>Software Engineer</h6>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusamus sunt incidunt consequuntur accusantium perferendis omnis similique quaerat. Quaerat, quod.</p>
            </div>
          </Slider>
        </Col>

      </Row>
    </Container>
  </section>
}

export default Testimonial