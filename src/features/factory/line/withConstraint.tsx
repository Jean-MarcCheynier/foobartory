import { useMemo } from 'react';
import { connect, useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../app/store";
import { LineEnum, craftFoobar as activity, selectFoobarCrafters, selectProd, FactoryState } from '../factorySlice'
import Line, { ILineProps } from './Line';
import FoobarCraftingLine from './FoobarCraftingLine';
import { rules } from '../../../utils/rules';
import { IRobot } from '../../../interfaces/Robot';

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
      console.log("Constraint");
      console.log(constraint(prod));
      return constraint(prod)?activity:undefined;
    },[prod])

      return  <WrappedComponent activity={allowAction} {...rest} />;
  }

export default withConstraint;