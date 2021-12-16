import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { LineEnum, selectBench } from '../factorySlice'
import Line from './Line';

const mapStateToProps = (state: RootState, ownProps = {}) => ({
    activityName: LineEnum.BENCH,
    robotList: selectBench(state)
});


const BenchLine = connect(mapStateToProps)(Line)

export default BenchLine;