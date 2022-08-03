import React, {Fragment} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </Fragment>
  )
}

export default Layout