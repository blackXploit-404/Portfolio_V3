import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ninjalookup from "../../Assets/Projects/ninja-logo.svg"
import reqquest from "../../Assets/Projects/req-svgrepo-com.png"
import zsecmail from "../../Assets/Projects/zsecmail.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reqquest}
              isBlog={false}
              title="ReqQuest"
              description="ReqQuest is a browser-based user-friendly REST API testing tool that lets you send requests, view responses in JSON format, and download them for further analysis. No sign-up is required, and you can start testing APIs instantly for free!"
              // ghLink=""
              demoLink="https://reqquest.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ninjalookup}
              isBlog={false}
              title="Ninja Lookup"
              description="🔍 A web application that allows users to perform domain and hosting lookups, including WHOIS information and hosting provider details.
              Technologies Used
Backend: Node.js, Express
Frontend: EJS, HTML, CSS, JavaScript
APIs:
WHOIS Lookup API (RapidAPI)
IP Geolocation API (ipwhois.app)" 
              // ghLink=""
              demoLink="https://lookupnow.ninja"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zsecmail}
              isBlog={false}
              title="Zsecmail Bot"
              description="Telegram Bot for Disposable Email Service using Cloudflare Workers. Summary - It processes updates from Telegram, handles various commands, and interacts with both the Telegram API and the temporary email service API to provide responses and functionality to the users. The worker listens for HTTP requests, processes them according to the method and path, and handles errors appropriately."
              demoLink="t.me/zsecmail_bot"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;