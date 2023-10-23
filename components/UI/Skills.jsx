import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/skills.module.css";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.skills__container}`}>
              <div>
                <SkillItem title="Machine Learning" icon="ri-bubble-chart-line" />
                <SkillItem title="Blockchain Development" icon="ri-bit-coin-line" />
              </div>

              <SkillItem title="Rust Development" icon="ri-computer-line" />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.skill__title}`}>
            <SectionSubtitle subtitle='What I do' />
            {/* <h3 className="mb-0 mt-4">Artificial Neural Networks</h3> */}
            {/* <h3 className="mb-4">Data Science</h3> */}
            <p>I analyze large datsets to derive insights. I also build Neural Networks to solve problems. Sometimes I do these things just to explore and learn more. My skills include data analysis, visualization, and Deep Learning.</p>
            <p>My work in blockchain involves analyzing and processing large datasets, as well as building decentralized applications and smart contracts.</p>
            <p>I mostly use Rust for system development projects and blockchain development. I am planning to do finiancial modelling and develop trading strategies with it in the future.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
