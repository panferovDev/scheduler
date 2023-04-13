import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useAppDispatch } from '../../features/reduxHooks';
import { createGroupThunk } from '../../features/apiThunk';

type FormTypes = {
  groupname: string;
};

export default function AddGroupForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { groupname } = Object.fromEntries(new FormData(event.currentTarget)) as FormTypes;
    event.currentTarget.reset();
    if(groupname){
      void dispatch(createGroupThunk(groupname));
    }
  };

  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Group create</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                name="groupname"
                autoComplete="off"
                placeholder="Group Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button type="submit" variant="warning" id="button-addon2">
                Create Group
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
