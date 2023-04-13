import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useAppSelector } from '../../features/reduxHooks';

type FormTypes = {
  students: string;
  groupId: string;
};

export default function AddStudentsForm(): JSX.Element {
  const grops = useAppSelector((state) => state.groups);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const regex = /([а-яА-ЯёЁ]+(?:[-\s][а-яА-ЯёЁ]+))/gm;
    const { students, groupId } = Object.fromEntries(new FormData(e.currentTarget)) as FormTypes;
    const matches = [...students.matchAll(regex)];
    const result = matches.map((match) => [...match[1].split(' ')]);
    console.log(groupId, result);
  };

  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <Form.Label>Select group</Form.Label>
          <InputGroup className="mb-3">
            <Form.Select name="groupId" aria-label="Default select example mb-3">
              <option>Select group</option>
              {grops.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.groupName}
                </option>
              ))}
            </Form.Select>
          </InputGroup>
          <Form.Label>Add students</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>Students</InputGroup.Text>
            <Form.Control
              name="students"
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
          <Button type="submit" variant="warning">
            submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
