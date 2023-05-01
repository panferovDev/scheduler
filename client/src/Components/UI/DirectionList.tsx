import React, { useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import DirectionListItem from './DirectionListItem';
import type { NotifyType } from '../../types/notifyTypes';
import { setModalNotify } from '../../features/slices/ConfirmModalSlise';

export default function DirectionList(): JSX.Element {
  const directions = useAppSelector((state) => state.directions);
  const dispatch = useAppDispatch();

  const modalHandler = useCallback(
    ({ id, name, type }: NotifyType) => {
      dispatch(setModalNotify({ id, name, type }));
    },
    [dispatch],
  );


  return (
    <Row>
      <Col>
        <ListGroup>
          {directions.map((direction) => (
            <DirectionListItem
              key={direction.id}
              direction={direction}
              modalHandler={modalHandler}
            />
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}
