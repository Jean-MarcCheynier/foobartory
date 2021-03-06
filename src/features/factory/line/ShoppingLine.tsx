import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { buyRobot as activity, selectShoppers, canBuyRobot, LineEnum } from '../factorySlice'
import Line from './Line';
import withConstraint from './withConstraint';
import { buyRobot } from './../factorySlice';

const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: LineEnum.SHOPPING,
  robotList: selectShoppers(state)
});

const ShoppingLine = connect(mapStateToProps, actionCreators)(withConstraint(Line, canBuyRobot))

export default ShoppingLine;