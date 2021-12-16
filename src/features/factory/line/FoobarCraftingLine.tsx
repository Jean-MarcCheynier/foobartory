import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { LineEnum, craftFoobar as activity, selectFoobarCrafters, selectProd } from '../factorySlice'
import Line from './Line';
import { canCraftFoobar } from './../factorySlice';
import withConstraint from "./withConstraint";

const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: LineEnum.FOOBAR_CRAFTING,
  prod: selectProd,
  robotList: selectFoobarCrafters(state)
});

//Set the crafting constraint
const LineWithConstraint = withConstraint(Line, canCraftFoobar);

//Connect the constrained production line with the Foobar crafting action
const FoobarCraftingLine = connect(mapStateToProps, actionCreators)(LineWithConstraint); 

export default FoobarCraftingLine;