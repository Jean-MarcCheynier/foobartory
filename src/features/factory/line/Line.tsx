import React from 'react';
import { connect } from 'react-redux';
import { IRobot } from '../../../interfaces/Robot';
import Robot from '../../robot/Robot';
import { LineEnum, changeLine } from '../factorySlice';

export interface ILineProps {
  activityName?: string,
  activity?: (args: {robot: IRobot}) => Promise<any>,
  changeLine?: (args: {robot: IRobot, line: LineEnum}) => Promise<any>,
  robotList: IRobot[]
}

const Line: React.FC<ILineProps> = ({ robotList, activity, activityName, changeLine }) => {
  
  return (<div className={"mx-auto my-1"}>
    { activityName && <h4 className="text-center w-100">{ activityName }</h4>}
    {robotList.map((robot, index) => (
      <Robot key={index} 
        {...robot} 
        action={activity} 
        changeLine={changeLine} />)
    )}
  </div>)
}

const actionCreator = {
  changeLine
}

export default connect(null, actionCreator )(Line);

