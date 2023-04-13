import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup';

export default function AddStudentsForm(): JSX.Element {
  return (
    <Row>
        <Col>
        <Form>
        <InputGroup className="mb-3">
        <Form.Select aria-label="Default select example mb-3">
            <option>Select group</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </Form.Select>

        </InputGroup>
         <InputGroup className="mb-3">
        <InputGroup.Text>Students</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
        </Form>
        </Col>
    </Row>
  )
}
