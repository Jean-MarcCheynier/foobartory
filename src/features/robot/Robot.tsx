import React, {useEffect, useCallback, useRef} from 'react';
import { Button, ButtonGroup, Card, ProgressBar } from 'react-bootstrap';
import { IRobot } from '../../interfaces/Robot';
import { LineEnum } from '../factory/factorySlice';
import { FaRobot } from 'react-icons/fa';
import styles from './Robot.module.scss'

const destinationLines = [
  LineEnum.FOO_MINING, 
  LineEnum.BAR_MINING, 
  LineEnum.FOOBAR_CRAFTING, 
  LineEnum.SHOPPING
]

/**
 * A robot component recieves a function 'action' which returns a promise
 * It has a single button to perform it's action. 
 * The button is disabled while the robot is working
 */
interface IRobotProps extends IRobot {
  action?: (args: {robot: IRobot}) => Promise<any>,
  changeLine?: (args: {robot: IRobot, line: LineEnum}) => Promise<any>,
} 

const Robot: React.FC<IRobotProps> = (props) => {
  
  // Define action queue as a 'ref' to prevent infinite loop, qctionQueue being modified by the useEffect
  const actionQueue = useRef<{() : void;}[]>([]);
  const { id, activity, busy, changingActivity, changeLine }= props;
  const pending = busy || changingActivity

  // Set next action in the queue
  const setNext = (actionToQueue: {() : void;}) => {
    actionQueue.current.push(actionToQueue)
  }

  // Action called on work button clicked
  const onWorkClicked = useCallback(() => {
    const { action, ...robot} = props;
    if(action) {
      action({robot})
    }
  },[props]);

  const onChangeLine = (line: LineEnum) => {
    if(changeLine !== undefined) {
      const arg = {robot: props, line}
      if(pending) {
        setNext(() => {changeLine(arg)})
      } else {
        changeLine(arg);
      }
    }

  }

  /**
   * Robot automation
   * Make robot work automatically on the line, and delay the action 'change line'
   */
  useEffect(() => {
    const getNextAction = () => {
      const nextAction = actionQueue.current.shift();
      return nextAction;
    }
    // If the robot is available
    if(!pending) {
      const nextAction = getNextAction();
      if(nextAction) {
        // Perform the next action present in the queue
        nextAction()
      }else{
        // Perform the activity of the current line
        onWorkClicked()
      }
    }

  },[onWorkClicked, pending])

  
  return <Card className={styles.Robot}>
    <div className={`text-center ${pending ? 'text-secondary' : 'text-primary'} my-3`}>{id}</div>
    <div className={`text-center ${pending ? 'text-secondary' : 'text-primary'} my-3`}><FaRobot size={70} /></div>
    <div className="w-100 position-absolute bottom-0">
      {(pending) && <ProgressBar style={{ borderRadius: '0px'}} now={50} animated />}
      <ButtonGroup size={"sm"} vertical className="w-100" aria-label="robot-control">
        { destinationLines.filter( line => line !== activity )
          .map( (line, index) => ( <Button className={styles[`Button--${line}`]} key={index} onClick={() => onChangeLine(line )}>{`Go to ${line}`}</Button>))
        }
      </ButtonGroup>
    </div>
    
  </Card>
}

export default Robot;

