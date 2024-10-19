import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5 text-center">
      <div className="bg-light p-5 rounded">
        <h1 className="display-4">Welcome to My Profile!</h1>
        <p className="lead">
          My career goal is to be more knowledgeable and contribute to more meaningful and helpful projects.
        </p>
        <Row className="justify-content-center mt-4">
          <Col xs="auto" className="mb-2">
            <Link to="/about">
              <Button variant="primary">About Me</Button>
            </Link>
          </Col>
          <Col xs="auto" className="mb-2">
            <Link to="/skills">
              <Button variant="info">My Skills</Button>
            </Link>
          </Col>
          <Col xs="auto" className="mb-2">
            <Link to="/contact">
              <Button variant="success">Contact Me</Button>
            </Link>
          </Col>
          <Col xs="auto" className="mb-2">
            <Link to="/submissionsuccess">
              <Button variant="warning">Submission Success</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
