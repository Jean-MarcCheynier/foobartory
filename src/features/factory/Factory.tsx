import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BarMiningLine from './line/BarMiningLine';
import FooMiningLine from './line/FooMiningLine';
import FoobarCraftingLine from './line/FoobarCraftingLine';
import ShoppingLine from './line/ShoppingLine';
import BenchLine from './line/BenchLine';
import styles from './Factory.module.scss'
import { RootState } from '../../app/store';
import { selectProd } from './factorySlice';
import { connect } from 'react-redux';


interface IFactoryProps {
  prod: any
}

const Factory: React.FC<IFactoryProps> = ({prod}) => {
  return <>
    <Row className="h-75">
      <Col className={styles.LineFooMining}>
        <FooMiningLine/>
      </Col>
      <Col className={styles.LineBarMining}>
        <BarMiningLine/>
      </Col>
      <Col className={styles.LineFoobarCrafting}>
        <FoobarCraftingLine />
      </Col>
      <Col className={styles.LineShopping}>
        <ShoppingLine />
      </Col>
      <Col className={styles.LineBenching}>
        <BenchLine/>
      </Col>
    </Row>
  </>
}

const mapStateToProps = (state: RootState) => ({ prod: selectProd(state)})

export default connect(mapStateToProps)(Factory);