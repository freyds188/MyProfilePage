// src/Components/Skills.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  const skills = ["JavaScript", "React", "CSS", "HTML", "Digital Arts"];
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>My Skills</h1>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;