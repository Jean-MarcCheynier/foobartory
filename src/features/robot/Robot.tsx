import { useState } from 'react';
import React from 'react';
import { Button, ButtonGroup, Card, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
import { IRobot } from '../../interfaces/Robot';
import { LineEnum } from '../factory/factorySlice';
import { FaRobot } from 'react-icons/fa'

/**
 * A robot component recieves a function 'action' which returns a promise
 * It has a single button to perform it's action. 
 * The button is disabled while the robot is working
 */
interface IRobotProps extends IRobot {
  action: () => Promise<any>
  changeLine: (args: { 'robotId': string, 'line': LineEnum }) => Promise<any>
}

const Robot: React.FC<IRobotProps> = ({ action, changeLine, id, busy, changingActivity }) => {
  
  const [working, setWorking] = useState(false);
  
  const handleOnClick = () => {
    //setWorking(true);
    action()
  };
  
  const pending = busy || changingActivity
  
  return <Card className="m-2" style={{minHeight: '160px'}}>
    <div className={`text-center ${pending ? 'text-secondary' : 'text-primary'} my-3`}><FaRobot size={70} /></div>
    <div className="w-100 position-absolute bottom-0">
      {(pending) && <ProgressBar style={{ borderRadius: '0px'}} now={50} animated />}
      <ButtonGroup className="w-100" aria-label="robot-control">
        <Button disabled={pending} name="work" onClick={handleOnClick}>Work</Button>
        <DropdownButton disabled={pending} as={ButtonGroup} title="Change Line" id="bg-nested-dropdown">
          {/* //TODO : Simplify  */}
          <Dropdown.Item onClick={() => changeLine({ robotId: id, line: LineEnum.FOO_MINING })}>{`Go to ${LineEnum.FOO_MINING}`}</Dropdown.Item>
          <Dropdown.Item onClick={() => changeLine({ robotId: id, line: LineEnum.BAR_MINING })}>{`Go to ${LineEnum.BAR_MINING}`}</Dropdown.Item>
          <Dropdown.Item onClick={() => changeLine({ robotId: id, line: LineEnum.FOOBAR_CRAFTING })}>{`Go to ${LineEnum.FOOBAR_CRAFTING}`}</Dropdown.Item>
          <Dropdown.Item onClick={() => changeLine({ robotId: id, line: LineEnum.SHOPPING })}>{`Go to ${LineEnum.SHOPPING}`}</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </div>
    
  </Card>
}

export default Robot;

