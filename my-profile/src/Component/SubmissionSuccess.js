// src/Components/SubmissionSuccess.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function SubmissionSuccess() {
  const { state } = useLocation();
  const { name, email, message } = state || {};

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Thank you, {name}!</h1>
          <p>Your message has been sent.</p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Message:</strong> {message}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SubmissionSuccess;
