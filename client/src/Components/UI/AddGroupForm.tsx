import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { createGroupThunk } from '../../features/apiThunk';
import { setNotify } from '../../features/slices/notifySlice';

type FormTypes = {
  groupName: string;
  phase: string;
  direction: string;
};

export default function AddGroupForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const directions = useAppSelector((state) => state.directions);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { groupName, phase, direction } = Object.fromEntries(
      new FormData(event.currentTarget),
    ) as FormTypes;

    if (groupName && phase !== 'Select phase' && direction) {
      console.log(groupName, phase, direction);
      event.currentTarget.reset();
      void dispatch(createGroupThunk({ groupName, phase, directionId: +direction}));
    } else {
      dispatch(setNotify('Please enter group, phase and direction'));
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
                name="groupName"
                autoComplete="off"
                placeholder="Group Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button type="submit" variant="warning" id="button-addon2">
                Create Group
              </Button>
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Select name="phase" aria-label="Default select example mb-3">
                <option>Select phase</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </InputGroup>
            <InputGroup className="mb-3">
              {directions.map((el) => (
                <Form.Check
                  key={el.id}
                  style={{ marginRight: '17px' }}
                  type="radio"
                  label={el.direction}
                  name="direction"
                  value={el.id}
                />
              ))}
            </InputGroup>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
