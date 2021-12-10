import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { LineEnum, craftFoobar as activity, selectFoobarCrafters, selectProd } from '../factorySlice'
import Line from './Line';
import { rules } from './../../../utils/rules';

import withConstraint, { IConstraint } from './withConstraint';

const craftingConstraint: IConstraint = prod => (prod.foo.length >= rules.FOOBAR_CRAFTING_PRICE_FOO && prod.bar.length >= rules.FOOBAR_CRAFTING_PRICE_FOO )

const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: "Foobar Crafting",
  prod: selectProd,
  robotList: selectFoobarCrafters(state)
});

//Set the crafting constraint
const LineWithConstraint = withConstraint(Line, craftingConstraint);

//Connect the constrained production line with the Foobar crafting action
const FoobarCraftingLine = connect(mapStateToProps, actionCreators)(LineWithConstraint); 

export default FoobarCraftingLine;