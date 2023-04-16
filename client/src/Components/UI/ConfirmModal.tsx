/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { setModalNotify } from '../../features/slices/ConfirmModalSlise';
import { delGroupThunk } from '../../features/apiThunk';

export default function ConfirmModal(): JSX.Element {
  const data = useAppSelector((state) => state.confirm.notify);
  const dispatch = useAppDispatch();

  return (
    <Modal
      size="sm"
      show={!!data}
      onHide={() => dispatch(setModalNotify(null))}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Body >
        <p>
          Are you sure you want to delete <b>{data?.name}</b> ?
        </p>
        <Stack direction="horizontal" gap={3}>
          <Button variant="warning" onClick={() => dispatch(setModalNotify(null))}>
            <span>Cancel</span>
          </Button>
          <Button variant="danger" onClick={() => void dispatch(delGroupThunk(data!.id))}>
            <span>Delete</span>
          </Button>
        </Stack>
      </Modal.Body>
    </Modal>
  );
}
