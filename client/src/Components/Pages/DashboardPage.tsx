import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddGroupForm from '../UI/AddGroupForm';
import AddStudentsForm from '../UI/AddStudentsForm';
import { useAppDispatch } from '../../features/reduxHooks';
import GroupList from '../UI/GroupList';
import fetchDashboardData from '../../features/apiThunk/dashboardThunk';
import DashBoardDirection from '../UI/DashBoardDirection';
import DirectionList from '../UI/DirectionList';

export default function DashboardPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchDashboardData());
  }, [dispatch]);

  return (
    <Row>
      <Col md={6} className="mt-3">
        <h4>
          <u>Add direction</u>
        </h4>
        <DashBoardDirection />
        <h4>
          <u>Add group</u>
        </h4>
        <AddGroupForm />
        <h4>
          <u>Add students</u>
        </h4>
        <AddStudentsForm />
      </Col>
      <Col md={6} className="mt-3">
        <h4>
          <u>All groups</u>
        </h4>
        <GroupList />
        <h4 className='mt-3'>
          <u>All directions</u>
        </h4>
        <DirectionList />
      </Col>
    </Row>
  );
}
