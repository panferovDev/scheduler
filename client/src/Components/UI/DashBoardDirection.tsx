import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useAppDispatch } from '../../features/reduxHooks';
import { addDirectionThunk } from '../../features/apiThunk/directionsThunks';
import { setNotify } from '../../features/slices/notifySlice';

type Formtype = {
  direction: string;
  weeks: string;
};

export default function DashBoardDirection(): JSX.Element {
  const dispatch = useAppDispatch();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { direction, weeks } = Object.fromEntries(new FormData(e.currentTarget)) as Formtype;
    console.log(direction, weeks);
    // if (direction !== '') {
    //   e.currentTarget.reset();
    //   void dispatch(addDirectionThunk(direction));
    // } else {
    //   dispatch(setNotify('Please enter a direction'));
    // }
  };
  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup className="mb-3">
              <Form.Control
                name="direction"
                autoComplete="off"
                placeholder="Create derection"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button type="submit" variant="warning" id="button-addon2">
                Create direction
              </Button>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup className="mb-3">
              <Form.Control
                name="weeks"
                type='number'
                autoComplete="off"
                placeholder="weeks in phase"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
