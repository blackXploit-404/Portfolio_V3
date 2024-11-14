import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiLinux,
  SiNpm,
  SiTKali,
  SiKalilinux,
  SiWindows,
  SiNetlify,
  SiVirtualbox,
} from "react-icons/si";
import "./Techstack.css"; // Importing the CSS file

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <p className="tech-name">Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p className="tech-name">Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-name">VS Code</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
        <p className="tech-name">NPM</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
        <p className="tech-name">Kali</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-name">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox />
        <p className="tech-name">Virtualbox</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="tech-name">Vercel</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p className="tech-name">Netlify</p>

      </Col>
    </Row>
  );
}

export default Toolstack;
