import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddGroupForm from '../UI/AddGroupForm';
import AddStudentsForm from '../UI/AddStudentsForm';

export default function DashboardPage(): JSX.Element {
  return (
    <>
      <h3>DashboardPage</h3>
      <Row>
        <Col md={6}>
          <AddGroupForm />
          <h4>Add students</h4>
          <AddStudentsForm/>
        </Col>
      </Row>
      
    </>
  );
}
