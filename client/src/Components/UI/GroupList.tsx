import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';

import { useAppSelector } from '../../features/reduxHooks';

export default function GroupList(): JSX.Element {
  const grops = useAppSelector((state) => state.groups);

  return (
    <Row>
      <Col>
        <ListGroup>
          {grops.map((group) => (
            <ListGroup.Item key={group.id} className="d-flex justify-content-between">
              <span>{group.groupName}</span>
              <CloseButton  />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}
