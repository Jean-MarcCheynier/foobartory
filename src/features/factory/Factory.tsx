import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IRobot } from '../../interfaces/Robot';
import { LineEnum } from './factorySlice';
import Line from './line/Line';
import BarMiningLine from './line/BarMiningLine';
import FooMiningLine from './line/FooMiningLine';
import FoobarCraftingLine from './line/FoobarCraftingLine';
import ShoppingLine from './line/ShoppingLine';
import produce from 'immer';
import Dashboard from './Dashboard';

interface IFactoryProps {
  robotList: IRobot[]
}

const Factory: React.FC<IFactoryProps> = ({ robotList}) => {
  return <Container>
  <Row>
      <Col>
        <FooMiningLine/>
      </Col>
      <Col>
        <BarMiningLine/>
      </Col>
      <Col>
        <FoobarCraftingLine />
      </Col>
      <Col>
        <ShoppingLine />
      </Col>
    </Row>
    <Row>
      <Dashboard/>
    </Row>
  </Container>
}

export default Factory;