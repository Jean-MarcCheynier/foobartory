import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { selectBench } from '../factorySlice'
import Line from './Line';

const mapStateToProps = (state: RootState, ownProps = {}) => ({
    activityName: "Bench",
    robotList: selectBench(state)
});


const BenchLine = connect(mapStateToProps)(Line)

export default BenchLine;