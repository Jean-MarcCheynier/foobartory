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
}

const Factory: React.FC<IFactoryProps> = () => {
  return <Row>
      <Col className="text-primary">
        <FooMiningLine/>
      </Col>
      <Col className="text-warning">
        <BarMiningLine/>
      </Col>
      <Col className="text-danger">
        <FoobarCraftingLine />
      </Col>
      <Col>
        <ShoppingLine />
      </Col>
    </Row>
}

export default Factory;