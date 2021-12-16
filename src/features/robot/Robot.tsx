import React, {useEffect, useCallback, useRef} from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { IRobot } from '../../interfaces/Robot';
import { LineEnum } from '../factory/factorySlice';
import { FaRobot } from 'react-icons/fa';

import styles from './Robot.module.scss';
import RobotIconActive from './RobotIconActive';
import ButtonChangeLine from './ButtonChangeLine';

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
  const { activity, busy, changingActivity, changeLine }= props;
  const pending = busy || changingActivity

  // Set next action in the queue
  const setNext = (actionToQueue: {() : void;}) => {
    actionQueue.current.push(actionToQueue)
  }

  // Execute robot activity
  const work = useCallback(() => {
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
        work()
      }
    }
  },[work, pending])


  return <Card role="robot" className={styles.Robot}>
    <div className={`${styles['Robot-icon']} ${styles[`Robot-icon--${changingActivity?'changing':activity}`]}`}>
      <FaRobot size={70} />
      {(activity && busy) ? 
        <RobotIconActive line={activity}/>
        :
        <RobotIconActive line={LineEnum.BENCH}/>
      }
    </div>

    <div className="w-100">
      <ButtonGroup size={"sm"} className={styles.ButtonGroup} aria-label="robot-control">
        <ButtonChangeLine line={LineEnum.FOO_MINING} activeLine={activity} onChangeLine={onChangeLine}>Foo</ButtonChangeLine>
        <ButtonChangeLine line={LineEnum.BAR_MINING} activeLine={activity} onChangeLine={onChangeLine}>Bar</ButtonChangeLine>
      </ButtonGroup>
      <ButtonGroup size={"sm"} className={styles.ButtonGroup} aria-label="robot-control">
        <ButtonChangeLine line={LineEnum.FOOBAR_CRAFTING} activeLine={activity} onChangeLine={onChangeLine}>Craft</ButtonChangeLine>
        <ButtonChangeLine line={LineEnum.SHOPPING} activeLine={activity} onChangeLine={onChangeLine}>Shop</ButtonChangeLine>
      </ButtonGroup>
    </div>
    
  </Card>
}

export default Robot;

