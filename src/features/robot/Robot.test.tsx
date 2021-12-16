import React from 'react'
import { render, fireEvent, waitFor, screen } from '../../utils/test-utils'
import '@testing-library/jest-dom'
import Robot from './Robot';
import { IRobot } from './../../interfaces/Robot';
import RobotFactory from './../../utils/RobotFactory';
import { LineEnum } from '../factory/factorySlice';


test('Display robot', async () => {

  const robot: IRobot = RobotFactory.createRobot(LineEnum.BAR_MINING)
  robot.busy = true;

  const action = () => new Promise<void>(resolve => {
    setTimeout(() => resolve(), 3000)
  })
  
  render(<Robot {...robot} action={action }/>)

  // const buttonList = screen.getAllByRole('button');
  // expect(buttonList).toHaveLength(4);
  // fireEvent.click(button);
  // expect(button).toBeDisabled();
  // await action()
  // expect(button).not.toBeDisabled();

})