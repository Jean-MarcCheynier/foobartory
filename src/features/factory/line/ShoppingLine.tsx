import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { LineEnum, buyRobot as activity, selectShoppers } from '../factorySlice'
import Line from './Line';

const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: LineEnum.SHOPPING,
  robotList: selectShoppers(state)
});

const ShoppingLine = connect(mapStateToProps, actionCreators)(Line)

export default ShoppingLine;