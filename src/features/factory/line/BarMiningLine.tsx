import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { LineEnum, mineBar as activity, selectBarMiners } from '../factorySlice'
import Line from './Line';

const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: LineEnum.BAR_MINING,
  robotList: selectBarMiners(state)
});

const BarMiningLine = connect(mapStateToProps, actionCreators)(Line)

export default BarMiningLine;