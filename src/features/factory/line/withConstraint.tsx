import { useMemo } from 'react';
import { LineEnum, selectProd, FactoryState } from '../factorySlice'
import Line, { ILineProps } from './Line';
import { IRobot } from '../../../interfaces/Robot';
import { useSelector } from 'react-redux';

type Prod = FactoryState['prod']

export interface ILinePropsT {
  activityName?: LineEnum,
  activity?: (args: {robot: IRobot}) => Promise<any>,
}

// A constraint is based on production
export type IConstraint = (prod: Prod) => boolean

// Activate the activity in a Line component according to the constraint
const withConstraint = (WrappedComponent: typeof Line, constraint: IConstraint): React.FC<ILineProps> => 
  ({ activity, ...rest}) => {
    const prod = useSelector(selectProd)
    const allowAction = useMemo(() => {
      return constraint(prod)?activity:undefined;
    },[prod, activity])

      return  <WrappedComponent activity={allowAction} {...rest} />;
  }

export default withConstraint;;