import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { LineEnum, craftFoobar as activity, selectFoobarCrafters } from '../factorySlice'
import Line from './Line';

const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: LineEnum.FOOBAR_CRAFTING,
  robotList: selectFoobarCrafters(state)
});

const FoobarCraftingLine = connect(mapStateToProps, actionCreators)(Line)

export default FoobarCraftingLine;