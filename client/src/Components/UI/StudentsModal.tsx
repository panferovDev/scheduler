import React, { useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { setStudentsModal } from '../../features/slices/ConfirmModalSlise';
import { delStudentThunk } from '../../features/apiThunk';

export default function StudentsModal(): JSX.Element {
  const data = useAppSelector((state) => state.confirm.students);
  const groups = useAppSelector((state) => state.groups);
  const dispatch = useAppDispatch();

  const currentGroup = useMemo(() => groups.find((group) => group.id === data), [data, groups]);

  return (
    <Modal size="lg" show={!!data} onHide={() => dispatch(setStudentsModal(null))}>
      <Modal.Body>
        <h4>
          <u>{currentGroup?.groupName}</u>
        </h4>
        <ListGroup>
          {currentGroup?.students.map((student, index) => (
            <ListGroup.Item key={student.id} className="d-flex justify-content-between">
              {index + 1} . {student.name}
              <Stack direction="horizontal" gap={3}>
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => void dispatch(delStudentThunk(student.id))}
                >
                  Delete
                </Button>
              </Stack>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}
