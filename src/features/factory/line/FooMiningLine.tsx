import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { mineFoo as activity, selectFooMiners } from '../factorySlice'
import Line from './Line';

const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: "Foo mining",
  robotList: selectFooMiners(state)
});

const FooMiningLine = connect(mapStateToProps, actionCreators)(Line)

export default FooMiningLine;