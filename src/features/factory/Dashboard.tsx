import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../app/store';
import { FactoryState, selectAll, selectProd, selectWorkshop } from './factorySlice';
import { Row, Col, Container } from 'react-bootstrap';

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
        <div><strong>{`Mined Foo : ${prod.foo.length}`}</strong></div>
      </Col>
      <Col>
        <div><strong>{`Mined Bar: ${prod.bar.length}`}</strong></div>
      </Col>
      <Col>
        <div><strong>{`Crafted Foobars: ${prod.foobar.length}`}</strong></div>
        <div><strong>{`Craft attempts: ${workshop.craftAttempts}`}</strong></div>
      </Col>
      <Col>
      
      </Col>
      <Col>
        <div><strong>{`Number of robots: ${Object.entries(robotMap).length}`}</strong></div>
      </Col>
  </Row>
  </Container>
}

const mapStateToProp = (state: RootState) => ({
  robotMap: selectAll(state),
  prod: selectProd(state),
  workshop: selectWorkshop(state)
})

export default connect(mapStateToProp)(Dashboard)