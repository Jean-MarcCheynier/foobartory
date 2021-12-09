import { useMemo } from 'react';
import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { LineEnum, craftFoobar as activity, selectFoobarCrafters, selectProd, FactoryState } from '../factorySlice'
import Line, { ILineProps } from './Line';
import { rules } from './../../../utils/rules';
import { IRobot } from './../../../interfaces/Robot';
import withConstraint, { IConstraint } from './withConstraint';

const craftingConstraint: IConstraint = prod => (prod.foo.length >= rules.FOOBAR_CRAFTING_PRICE_FOO && prod.bar.length >= rules.FOOBAR_CRAFTING_PRICE_FOO )

const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: LineEnum.FOOBAR_CRAFTING,
  prod: selectProd,
  robotList: selectFoobarCrafters(state)
});

//Set the crafting constraint
const LineWithConstraint = withConstraint(Line, craftingConstraint);

//Connect the constrained production line with the Foobar crafting action
const FoobarCraftingLine = connect(mapStateToProps, actionCreators)(LineWithConstraint); 

export default FoobarCraftingLine;