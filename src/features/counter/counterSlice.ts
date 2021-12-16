import { createSlice} from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface CounterState {
  count: number;
  start: boolean;
  intervalId?: any;
}

const initialState: CounterState = {
  count: 0,
  start: false
};

let interval: NodeJS.Timeout | null = null;


export const startCounter = (): any => (  
  dispatch: any,
  getState: any
) => {
    if(!interval) {
      interval = setInterval(() => {
        dispatch(increment());
      }, 1000);
    }
}

export const stopCounter = (): AppThunk => (  
  dispatch,
  getState
) => {
  if( interval ) {
    clearInterval(interval)
    interval = null;
  } 
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    storeIntervalId: (state, action) => ({...state, intervalId: action.payload}),
    reset: () => initialState
  }
});

export const { increment, storeIntervalId, reset } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.count;
export default counterSlice.reducer;
