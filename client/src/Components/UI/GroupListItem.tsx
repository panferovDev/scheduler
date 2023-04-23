/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import type { GroupType } from '../../types';
import { useAppDispatch } from '../../features/reduxHooks';
import { setStudentsModal } from '../../features/slices/ConfirmModalSlise';
import type { NotifyType } from '../../types/notifyTypes';

type GroupListItemProps = {
  group: GroupType;
  modalHandler: ({ id, name, type }: NotifyType) => void;
};

function GroupListItem({ group, modalHandler }: GroupListItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <span style={{ cursor: 'pointer' }} onClick={() => dispatch(setStudentsModal(group.id))}>
        <b> {group.groupName} </b>[students: {group.students.length} phase: {group.phase} direction:{' '}
        {group.directionType?.direction || 'no direction'}]
      </span>
      <CloseButton
        onClick={() => modalHandler({ id: +group.id, name: group.groupName, type: 'group' })}
      />
    </ListGroup.Item>
  );
}

export default React.memo(GroupListItem);
