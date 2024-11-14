import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Surajit Sen</span>, a dedicated student from Kolkata, India.
            <br />
            <br />
            I'm currently pursuing a Bachelor of Computer Applications (BCA) at B.P. Poddar Institute of Management and Technology. I completed my Higher Secondary education at Uttarpara Govt. High School.
            <br />
            <br />
            My interests lie in <span className="purple">web development</span> and <span className="purple">cybersecurity</span>. I'm passionate about building secure and efficient digital solutions that make a difference.
            <br />
            <br />
            Alongside my studies, I’m continually learning new technologies and improving my skills to stay ahead in this fast-evolving field. I’m excited about taking on challenges that help me grow and contribute meaningfully to the tech community.
            <br />
            <br />
            Outside of academics, I enjoy <span className="purple">exploring tech trends, participating in coding challenges, and connecting with like-minded individuals.</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
