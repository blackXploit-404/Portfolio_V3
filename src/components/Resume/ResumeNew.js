import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [isAvailable, setIsAvailable] = useState(false); // Flag to control visibility of content

  useEffect(() => {
    // Set resume availability flag (this could be dynamically controlled)
    setIsAvailable(false); // Set this to 'false' to show the under-development message
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Check if the resume page is available */}
        {!isAvailable ? (
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <div className="under-development-message">
              <h2 style={{ color: "white" }}>This page is not available right now.</h2>
              <p style={{ color: "white" }}>
                Check back later for updates.
              </p>
            </div>
          </Row>
        ) : (
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href="path/to/your/resume.pdf"
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default ResumeNew;
