import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Robot from './features/robot/Robot';
import Factory from './features/factory/Factory';
import { IRobot } from './interfaces/Robot';
import { Container } from 'react-bootstrap';
import Dashboard from './features/factory/Dashboard';

function App() {
  
  const action = () => new Promise<void>(resolve => {
    setTimeout(() => resolve(), 3000)
  })
  

  
  return (
    <Container className="h-100">
      <Factory />
      <Dashboard />

    </Container>
  );
}

export default App;
