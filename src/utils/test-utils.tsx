import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
// Import your own reducer
import { reducer } from '../app/store'
import { configureStore } from '@reduxjs/toolkit';

function render(
  ui: any,
  {
    preloadedState,
    store = configureStore({
      reducer,
      preloadedState
    }),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}


// re-export everything
export * from '@testing-library/react'
// override render method
export { render }