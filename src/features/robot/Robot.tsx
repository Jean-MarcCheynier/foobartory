import { useState } from 'react';
import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * A robot component recieves a function 'action' which returns a promise
 * It has a single button to perform it's action. 
 * The button is disabled while the robot is working
 */
type IRobotProps = {
  action: () => Promise<any>
}

const Robot: React.FC<IRobotProps> = ({ action }) => {
  
  const [working, setWorking] = useState(false);
  
  const handleOnClick = () => {
    setWorking(true);
    action().then(() => {
      setWorking(false);
    })
  };
  
  return <div>
    <h2>Robot</h2>
    <Button disabled={working} name="work" onClick={handleOnClick}>Work</Button>
  </div>
}

export default Robot;

