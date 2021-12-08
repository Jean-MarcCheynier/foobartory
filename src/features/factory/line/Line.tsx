import React from 'react';
import { IRobot } from '../../../interfaces/Robot';
import Robot from '../../robot/Robot';
import { LineEnum } from '../factorySlice';

interface ILineProps {
  activityName?: LineEnum,
  activity: any,
  robotList: IRobot[]
}

const Line: React.FC<ILineProps> = ({ robotList, activity, activityName }) => {
  
  return (<div>
    <h1>{ activityName }</h1>
    {robotList.map((robot, index) => <Robot key={index} action={() => activity({robot})} {...robot}/> )}
  </div>)
}

export default Line;

