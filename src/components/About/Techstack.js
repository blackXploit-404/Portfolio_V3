import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAws, FaDigitalOcean, FaLinux } from "react-icons/fa";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiPython, DiHtml5, DiCss3 } from "react-icons/di";
import { SiAngular, SiMysql, SiAwslambda, SiFirebase, SiTailwindcss } from "react-icons/si";
import "./Techstack.css"; // Ensure your CSS file has necessary styles

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p className="tech-name">HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p className="tech-name">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p className="tech-name">Tailwind CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-name">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-name">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-name">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="tech-name">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p className="tech-name">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDigitalOcean />
        <p className="tech-name">DigitalOcean</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="tech-name">Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-name">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-name">Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
