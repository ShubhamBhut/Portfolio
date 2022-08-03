import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";

const NAV__LINK = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '#about',
    display: 'About'
  },
  {
    path: '#skills',
    display: 'Skills'
  },
  {
    path: '#portfolio',
    display: 'Portfolio'
  },
  {
    path: '#contact',
    display: 'Contact Me'
  },
];

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          {/* {Footer Top} */}
          <Col lg="6" className={`${classes.footer__top}`}>
            {/* <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div> */}

            <div className={`${classes.nav__quote}`}>
            “Where there is data smoke, there is business fire.” — Thomas Redman
            </div>
            
          </Col>

          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.footer__creator}`}>
              <h6>
                Created by Shubham
              </h6>
            </div>
          </Col>

          <Col lg='12'>
            <div className={`${classes.footer__copyright}`}>
              <p>&copy; Copyright {year} - Developed by Shubham Patel.
              All rights
              reserved.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
