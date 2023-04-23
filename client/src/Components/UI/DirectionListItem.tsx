import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import type { DirectionType } from '../../types';
import type { NotifyType } from '../../types/notifyTypes';

type DirectionListItemProps = {
  direction: DirectionType;
  modalHandler: ({ id, name, type }: NotifyType) => void;
};

function DirectionListItem({ direction, modalHandler }: DirectionListItemProps): JSX.Element {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <span style={{ cursor: 'pointer' }}>{direction.direction}</span>
      <CloseButton
        onClick={() =>
          modalHandler({ id: direction.id, name: direction.direction, type: 'direction' })
        }
      />
    </ListGroup.Item>
  );
}

export default React.memo(DirectionListItem);
