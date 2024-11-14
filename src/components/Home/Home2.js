import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color:"whitesmoke" }}>
              Professional <span className="purple"> Summary </span>
            </h1>
            <p className="home-about-body">
              <br />
              <br />Hi, I'm Surajit Sen, a <span className="purple">Cybersecurity Enthusiast</span> and 
              <span className="purple"> Backend Developer</span>. I have experience in building secure and efficient web applications 
              using <span className="purple">Node.js, Express.js, and Flask</span>.
              <br />
              <br />
              I’m also familiar with cloud platforms like <span className="purple">DigitalOcean</span> and <span className="purple">Firebase</span>, 
              and I enjoy working on projects that focus on security, including encryption, authentication, and protection from attacks.
              <br />
              <br />
              My goal is to keep learning and building secure, scalable solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="home-profile-image" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
