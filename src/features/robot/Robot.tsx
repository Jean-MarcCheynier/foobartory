import { useState } from 'react';
import React from 'react';
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { IRobot } from '../../interfaces/Robot';
import { LineEnum } from '../factory/factorySlice';

/**
 * A robot component recieves a function 'action' which returns a promise
 * It has a single button to perform it's action. 
 * The button is disabled while the robot is working
 */
interface IRobotProps extends IRobot {
  action: () => Promise<any>
  changeLine: (args: { 'robotId': string, 'line': LineEnum }) => Promise<any>
}

const Robot: React.FC<IRobotProps> = ({ id, action, changeLine, busy }) => {
  
  const [working, setWorking] = useState(false);
  
  const handleOnClick = () => {
    //setWorking(true);
    action()
  };
  
  return <div>
    <h2>Robot</h2>
    <ButtonGroup aria-label="robot-control">
      <Button disabled={busy} name="work" onClick={handleOnClick}>Work</Button>
      <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
        <Dropdown.Item onClick={() => changeLine({ robotId: id, line: LineEnum.FOO_MINING })}>{`Go to ${LineEnum.FOO_MINING}`}</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLine({ robotId: id, line: LineEnum.BAR_MINING })}>{`Go to ${LineEnum.BAR_MINING}`}</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLine({ robotId: id, line: LineEnum.FOOBAR_CRAFTING })}>{`Go to ${LineEnum.FOOBAR_CRAFTING}`}</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLine({ robotId: id, line: LineEnum.SHOPPING })}>{`Go to ${LineEnum.SHOPPING}`}</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
    
  </div>
}

export default Robot;

