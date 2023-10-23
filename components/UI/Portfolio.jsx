import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/portfolio.module.css'
import PortfolioItem from './PortfolioItem'

import portfolioData from '../data/portfolio'

const Portfolio = () => {


   const [filter, setFilter] = useState("AI & Data Science")
   const [data, setData] = useState()

   useEffect(()=>{

      if(filter === "AI & Data Science"){
         const filteredData = portfolioData.filter(item =>item.category === filter)

         setData(filteredData)
      }

      if(filter === "Rust"){
         const filteredData = portfolioData.filter(item =>item.category === filter)

         setData(filteredData)
      }

      if(filter === "Blockchain"){
         const filteredData = portfolioData.filter(item =>item.category === filter)

         setData(filteredData)
      }

      if(filter === 'Miscellaneous'){
         const filteredData = portfolioData.filter(item =>item.category === filter)

         setData(filteredData)
      }
   },[filter])

   const active = `${classes.tab__btn__active}`

  return (
    <section id='portfolio'>
      <Container>
         <Row>
            <Col lg='6' md='6' className='mb-5'>
               <SectionSubtitle subtitle='My Portfolio' />
               <h4>Some of My ditinguished works</h4>
            </Col>

            <Col lg='6' md='6'>
               <div className={`${classes.tab__btns} text-end`}>
                  <button className={`${filter === "AI & Data Science"? active : ''} secondary__btn text-white`} onClick={()=>setFilter("AI & Data Science")}>AI and Data Science</button>
                  <button className={`${filter === "Rust"? active : ''} secondary__btn text-white`} onClick={()=>setFilter("Rust")}>Rust</button>
                  <button className={`${filter === "Blockchain"? active : ''} secondary__btn text-white`} onClick={()=>setFilter("Blockchain")}>Blockchain Dev.</button>
                  <button className={`${filter === 'Miscellaneous'? active : ''} secondary__btn text-white`} onClick={()=>setFilter('Miscellaneous')}>Miscellaneous</button>
               </div>
            </Col>

            {
               data?.map(item=>(
                  <Col lg='4' md='4' sm='6' key={item.id}>
                     <PortfolioItem item={item} />
                  </Col>
               ))
            }

         </Row>
      </Container>
    </section>
  )
}

export default Portfolio