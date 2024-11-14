import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Under Development Message */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <div className="under-development">
              <h2 style={{ color: "white" }}>This page is under development</h2>
              <p style={{ color: "white" }}>
                I'm currently working on adding more projects to this page. Stay tuned for updates!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
