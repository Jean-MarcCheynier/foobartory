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
  
  const robot1: IRobot = { 'id': '1', 'busy': false };
  const robot2: IRobot = { 'id': '2', 'busy': false };
  
  return (
    <Container className="h-100">
      <Factory robotList={[robot1, robot2]} />
      <Dashboard />

    </Container>
  );
}

export default App;
