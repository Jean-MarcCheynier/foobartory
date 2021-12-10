import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BarMiningLine from './line/BarMiningLine';
import FooMiningLine from './line/FooMiningLine';
import FoobarCraftingLine from './line/FoobarCraftingLine';
import ShoppingLine from './line/ShoppingLine';
import BenchLine from './line/BenchLine';


interface IFactoryProps {
}

const Factory: React.FC<IFactoryProps> = () => {
  return <>
    <Row className="h-75">
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
      <Col>
        <BenchLine/>
      </Col>
    </Row>
  </>
}

export default Factory;