import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';

import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { delGroupThunk } from '../../features/apiThunk';

export default function GroupList(): JSX.Element {
  const grops = useAppSelector((state) => state.groups);
  const dispatch = useAppDispatch();

  const clickHandler = (id: number): void => {
    void dispatch(delGroupThunk(id));
  };

  return (
    <Row>
      <Col>
        <ListGroup>
          {grops.map((group) => (
            <ListGroup.Item key={group.id} className="d-flex justify-content-between">
              <span>
                <b> {group.groupName} </b>[students: {group.students.length}]
              </span>
              <CloseButton onClick={() => clickHandler(group.id)} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}
