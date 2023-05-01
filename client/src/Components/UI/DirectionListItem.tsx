/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import { BiDirections } from 'react-icons/bi';
import type { DirectionType } from '../../types';
import type { NotifyType } from '../../types/notifyTypes';
import type { WeeksDirectionType } from '../../types/weeksDirectionType';
import { useAppDispatch } from '../../features/reduxHooks';
import { setModalDirectionWeeks } from '../../features/slices/dashboardWeeksDirection';

type DirectionListItemProps = {
  direction: DirectionType;
  modalHandler: ({ id, name, type }: NotifyType) => void;
};

function DirectionListItem({ direction, modalHandler }: DirectionListItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <BiDirections size="20" color="green" />
      <span
        style={{ cursor: 'pointer' }}
        onClick={() =>
          dispatch(setModalDirectionWeeks({ directionId: direction.id, weeks: direction.weeks }))
        }
      >
        {direction.direction} [weeks: {direction.weeks}]
      </span>
      <CloseButton
        onClick={() =>
          modalHandler({ id: direction.id, name: direction.direction, type: 'direction' })
        }
      />
    </ListGroup.Item>
  );
}

export default React.memo(DirectionListItem);
