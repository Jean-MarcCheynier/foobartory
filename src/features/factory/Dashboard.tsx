import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../app/store';
import { FactoryState, LineEnum, selectProd } from './factorySlice';
import { Row, Col } from 'react-bootstrap';

type Prod = FactoryState['prod']

interface IDashboardProps {
  prod: Prod
}

const Dashboard: React.FC<IDashboardProps> = ({prod}) => {
  
  return <Row>
      <Col>
      <div><strong>{`Mined Foo : ${prod.foo.length}`}</strong></div>
      <div><strong>{`Mined Bar: ${prod.bar.length}`}</strong></div>
      <div><strong>{`Crafted Foobar: ${prod.foobar.length}`}</strong></div>
      </Col>
  </Row>
}

const mapStateToProp = (state: RootState) => ({
  prod: selectProd(state)
})

export default connect(mapStateToProp)(Dashboard)