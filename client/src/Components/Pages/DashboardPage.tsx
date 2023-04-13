import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
import AddGroupForm from '../UI/AddGroupForm';
import AddStudentsForm from '../UI/AddStudentsForm';
import { useAppDispatch } from '../../features/reduxHooks';
import { fetchGroups } from '../../features/apiThunk';
import GroupList from '../UI/GroupList';

export default function DashboardPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchGroups());
  }, []);

  return (
    <Row>
      <Col md={6} className="mt-3">
        <h4>Add group</h4>
        <AddGroupForm />
        <h4>Add students</h4>
        <AddStudentsForm />
      </Col>
      <Col md={6} className="mt-3">
        <h4>All groups</h4>
        <GroupList />
      </Col>
    </Row>
  );
}
