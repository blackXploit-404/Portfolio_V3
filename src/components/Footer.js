import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={12} className="home-about-social">
          <h1 style={{ color: "whitesmoke" }}>Let's Connect!</h1>
          <p>
            Feel free to <span className="purple">reach out</span> and connect with me.
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/blackXploit-404"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/getsensurajit"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/getsensurajit"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mr.sen_08"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      
      <Row>
        <Col md={12} className="footer-copywright">
          <h3>Copyright © {year} Surajit Sen | All rights reserved.</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
