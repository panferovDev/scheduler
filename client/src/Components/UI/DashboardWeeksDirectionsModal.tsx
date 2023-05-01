import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { setModalDirectionWeeks } from '../../features/slices/dashboardWeeksDirection';

export default function DashboardWeeksDirectionsModal(): JSX.Element {
  const data = useAppSelector((state) => state.weeksDashbaoardDirections.data);
  const dispatch = useAppDispatch();
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <Modal
      size="lg"
      show={!!data}
      onHide={() => dispatch(setModalDirectionWeeks(null))}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Body>
        <Row>
          {days.map((day) => (
            <Col md={6} key={day}>
              <h5 style={{color:'purple'}}>{day}</h5>
              <Stack gap={2} className='mt-3 mb-3'>
                <Form.Check inline label="solo" name="group1" type="radio" />
                <Form.Check inline label="pair" name="group1" type="radio" />
                <Form.Check inline label="group" name="group1" type="radio" />
              </Stack>
            </Col>
          ))}
        </Row>
      </Modal.Body>
    </Modal>
  );
}
