import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { LineEnum, mineFoo as activity, selectFooMiners } from '../factorySlice'
import Line from './Line';

const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: LineEnum.FOO_MINING,
  robotList: selectFooMiners(state)
});

const FooMiningLine = connect(mapStateToProps, actionCreators)(Line)

export default FooMiningLine;