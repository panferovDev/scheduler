import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import DashboardPage from './Components/Pages/DashboardPage';
import AppBar from './Components/UI/AppBar';

function App(): JSX.Element {

  return (
      <Container>
        <AppBar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      </Container>
  );
}

export default App;
