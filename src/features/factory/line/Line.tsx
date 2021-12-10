import React from 'react';
import { Stack } from 'react-bootstrap';
import { connect } from 'react-redux';
import { IRobot } from '../../../interfaces/Robot';
import Robot from '../../robot/Robot';
import { LineEnum, changeLine } from '../factorySlice';

export interface ILineProps {
  direction?: "vertical"|"horizontal",
  activityName?: string,
  activity?: (args: {robot: IRobot}) => Promise<any>,
  changeLine?: (args: {robot: IRobot, line: LineEnum}) => Promise<any>,
  robotList: IRobot[]
}

const Line: React.FC<ILineProps> = ({ robotList, activity, activityName, changeLine, direction="vertical" }) => {
  
  return (<Stack direction={direction} gap={1}>
    { activityName && <h4 className="text-center w-100">{ activityName }</h4>}
    {robotList.map((robot, index) => (
      <Robot key={index} 
        {...robot} 
        action={activity} 
        changeLine={changeLine} />)
    )}
  </Stack>)
}

const actionCreator = {
  changeLine
}

export default connect(null, actionCreator )(Line);

