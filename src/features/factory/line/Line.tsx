import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../app/store';
import { IRobot } from '../../../interfaces/Robot';
import Robot from '../../robot/Robot';
import { LineEnum, changeLine } from '../factorySlice';

export interface ILineProps {
  activityName?: LineEnum,
  producing?: boolean,
  activity?: (args: {robot: IRobot}) => Promise<any>,
  changeLine?: (args: {robot: IRobot, line: LineEnum}) => Promise<any>,
  robotList: IRobot[]
}

const Line: React.FC<ILineProps> = ({ robotList, activity, producing, activityName, changeLine }) => {


  
  return (<div role="line" aria-label={`line-${activityName}`} className={"mx-auto my-1"}>
    { activityName && <h4 className="text-center w-100">{ activityName }</h4>}
    {robotList.map((robot, index) => (
      <Robot key={index} 
        {...robot} 
        action={producing?activity:undefined} 
        changeLine={changeLine} />)
    )}
  </div>)
}

const mapSateToProps = (state: RootState) => ({
  producing: state.factory.producing
})

const actionCreator = {
  changeLine
}

export default connect(mapSateToProps, actionCreator )(Line);

