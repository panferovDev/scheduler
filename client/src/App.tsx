import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import DashboardPage from './Components/Pages/DashboardPage';
import AppBar from './Components/UI/AppBar';
import CustomModal from './Components/UI/Notyfy';
import ConfirmModal from './Components/UI/ConfirmModal';
import StudentsModal from './Components/UI/StudentsModal';
import DashboardWeeksDirectionsModal from './Components/UI/DashboardWeeksDirectionsModal';

function App(): JSX.Element {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
      <CustomModal />
      <ConfirmModal />
      <StudentsModal />
      <DashboardWeeksDirectionsModal />
    </Container>
  );
}

export default App;
