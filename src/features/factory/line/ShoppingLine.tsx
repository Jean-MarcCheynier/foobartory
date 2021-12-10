import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { buyRobot as activity, selectShoppers, canBuyRobot } from '../factorySlice'
import Line from './Line';
import withConstraint from './withConstraint';

const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: "Robot Shop",
  robotList: selectShoppers(state)
});

const ShoppingLine = connect(mapStateToProps, actionCreators)(withConstraint(Line, canBuyRobot))

export default ShoppingLine;