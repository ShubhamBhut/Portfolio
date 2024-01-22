import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import classes from "../../styles/about.module.css";

import img01 from "../../public/images/nn1.gif";
import img02 from "../../public/images/ds1.png";
import img03 from "../../public/images/nn2.png";
import img04 from "../../public/images/ds2.jpg";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">Data Alchemist and Deep learning Maestro</h3>
            <p>
            A few interesting things about me. I love to read science fiction (my favorite is The Mysterious Island by Jules Verne). I am also passionate about history and finance. In free time (if I ever get) I play competitive strategy games and Skyrim. Lastly, I love learning. Every day I push myself to learn something new, whether that be about machine learning, software engineering, or miscellaneous facts about the universe. Some of my Soft-skills - 
            </p>

            <div className="d-flex align-items-centre gap-5">
              <div>
                <h6 className="d-flex align-items-centre gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className="d-flex align-items-centre gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Management
                </h6>
              </div>

              <div>
                <h6 className="d-flex align-items-centre gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative
                </h6>

                <h6 className="d-flex align-items-centre gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Communication
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="https://github.com/ShubhamBhut">My Github</Link>
              </button>

              {/* <button className="secondary__btn">
                <Link href="#">Download CV</Link>
              </button> */}
            </div>
          </Col>

          <Col lg="6">
            <div className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}>
              <div className="d-flex flex-column mb-3">
                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img01} alt="about-img" />
                </div>

                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              <div className="d-flex flex-column mb-3">
                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img03} alt="about-img" />
                </div>

                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img04} alt="about-img" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
