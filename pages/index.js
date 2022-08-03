import { Fragment } from "react"
import Hero from "../components/UI/Hero"
import Skills from "../components/UI/Skills"
import About from "../components/UI/About"
import Portfolio from "../components/UI/Portfolio"
import Testomonial from "../components/UI/Testimonial"
import Contact from "../components/UI/Contact"
import Head from 'next/head'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href='/favicon2.png' />
      </Head>
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      {/* <Testomonial /> */}
      <Contact />
    </Fragment>
  )
}
