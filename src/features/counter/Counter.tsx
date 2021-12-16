import React from 'react';
import {
  startCounter,
  stopCounter,
  selectCount,
} from './counterSlice';
import { RootState } from '../../app/store';
import { connect } from 'react-redux';

interface ICountProps {
  count: number, 
  start: boolean,
  startCounter: () => void,
  stopCounter: () => void
} 

const Counter: React.FC<ICountProps> = ({count, start, startCounter, stopCounter}) => {

  const mm = Math.round(count/60).toString();
  const ss = (count%60).toString();
  const displayDigits = (s: string) => {
    if(s.length === 0) {
      return "00"
    } else if(s.length === 1) {
      return `0${s}`
    } else {
      return s
    }
  }
  return (
    <strong className='test-primary'>
      {`${displayDigits(mm)}:${displayDigits(ss)}` }
    </strong>
  );
}

const mapStateToProps = (state: RootState) => ({
  start: state.factory.producing,
  count: selectCount(state)
})

const actionCreator = {
  startCounter,
  stopCounter
}

export default connect(mapStateToProps, actionCreator)(Counter)
