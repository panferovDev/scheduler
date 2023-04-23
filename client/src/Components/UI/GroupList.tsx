/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { setModalNotify } from '../../features/slices/ConfirmModalSlise';
import GroupListItem from './GroupListItem';
import type { NotifyType } from '../../types/notifyTypes';

function GroupList(): JSX.Element {
  const grops = useAppSelector((state) => state.groups);
  const dispatch = useAppDispatch();

  const clickHandler = useCallback(
    ({ id, name, type }: NotifyType): void => {
      dispatch(setModalNotify({ id, name, type }));
    },
    [dispatch],
  );
  return (
    <Row>
      <Col>
        <ListGroup>
          {grops.map((group) => (
            <GroupListItem key={group.id} group={group} modalHandler={clickHandler} />
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default React.memo(GroupList);
