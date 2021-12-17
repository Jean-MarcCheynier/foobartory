import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../app/store';
import { FactoryState, selectAll, selectProd, selectWorkshop } from './factorySlice';
import { Row, Col, Container } from 'react-bootstrap';
import Counter from './../counter/Counter';
import { rules } from './../../utils/rules';

type Prod = FactoryState['prod']
type Workshop = FactoryState['workshop']
type RobotMap = FactoryState['robotMap']

interface IDashboardProps {
  robotMap: RobotMap,
  prod: Prod,
  workshop: Workshop
}

const Dashboard: React.FC<IDashboardProps> = ({prod, workshop, robotMap}) => {
  
  return <Container className="fixed-bottom">
  <Row className="text-center bg-secondary">
      <Col>
        <div><strong>FOO : <span role="counter" aria-label='foo count'>{prod.foo.length}</span></strong></div>
      </Col>
      <Col>
        <div><strong>BAR:  <span role="counter" aria-label='bar count'>{prod.bar.length}</span></strong></div>
      </Col>
      <Col>
        <div><strong>FOOBAR: <span role="counter" aria-label='foobar count'>{prod.foobar.length}</span></strong></div>
      </Col>
      <Col>
        <div><strong>PRICE (FOOBAR): <span role="label" aria-label='foobar price'>{rules.ROBOT_PRICE}</span></strong></div>
      </Col>
      <Col>
        <div><strong>Number of robots: <span role="counter" aria-label='robot count'>{`${Object.entries(robotMap).length} / ${rules.VICTORY}`}</span></strong></div>

      </Col>
  </Row>
  <Row className="text-center bg-secondary">
    <Col><div className="w-100"><Counter/></div></Col>
  </Row>
  </Container>
}

const mapStateToProp = (state: RootState) => ({
  robotMap: selectAll(state),
  prod: selectProd(state),
  workshop: selectWorkshop(state)
})

export default connect(mapStateToProp)(Dashboard)