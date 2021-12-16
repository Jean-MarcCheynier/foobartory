import React from 'react';
import './App.css';
import Factory from './features/factory/Factory';
import { Container } from 'react-bootstrap';
import Dashboard from './features/factory/Dashboard';
import ModalRules from './features/modal/ModalRules';
import ModalVictory from './features/modal/ModalVictory';

function App() {
  
  return (
    <Container className="h-100">
      <ModalRules/>
      <ModalVictory/>
      <Factory />
      <Dashboard />
    </Container>
  );
}

export default App;
