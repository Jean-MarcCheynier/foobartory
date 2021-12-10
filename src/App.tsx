import React from 'react';
import './App.css';
import Factory from './features/factory/Factory';
import { Container } from 'react-bootstrap';
import Dashboard from './features/factory/Dashboard';

function App() {
  
  return (
    <Container className="h-100">
      <Factory />
      <Dashboard />

    </Container>
  );
}

export default App;
