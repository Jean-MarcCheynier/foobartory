import { LineEnum, Constraint } from '../factorySlice'
import Line, { ILineProps } from './Line';
import { IRobot } from '../../../interfaces/Robot';
import { useSelector } from 'react-redux';


export interface ILinePropsT {
  activityName?: LineEnum,
  activity?: (args: {robot: IRobot}) => Promise<any>,
}

// Activate the activity in a Line component according to the constraint
const withConstraint = (WrappedComponent: typeof Line, constraint: Constraint): React.FC<ILineProps> => 
  ({ activity, ...rest}) => {
    const allowActivity = useSelector(constraint)
    return  <WrappedComponent activity={allowActivity?activity:undefined} {...rest} />;
  }

export default withConstraint;;