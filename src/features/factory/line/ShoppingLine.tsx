import { connect } from "react-redux"
import { RootState } from "../../../app/store";
import { LineEnum, buyRobot as activity, selectShoppers } from '../factorySlice'
import Line from './Line';
import { rules } from './../../../utils/rules';
import withConstraint, { IConstraint } from './withConstraint';

const shoppingConstraint: IConstraint = prod => (prod.foobar.length >= rules.ROBOT_PRICE )


const actionCreators = {
  activity
}

const mapStateToProps = (state: RootState, ownProps = {}) => ({
  activityName: "Robot Shop",
  robotList: selectShoppers(state)
});

const ShoppingLine = connect(mapStateToProps, actionCreators)(withConstraint(Line, shoppingConstraint))

export default ShoppingLine;