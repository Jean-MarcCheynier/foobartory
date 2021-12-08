import React from 'react'
import { render, fireEvent, waitFor, screen } from '../../utils/test-utils'
import '@testing-library/jest-dom'
import Robot from './Robot';


test('Click on action button', async () => {
  //Action that takes n milliseconds
  const action = () => new Promise<void>(resolve => {
    setTimeout(() => resolve(), 3000)
  })
  
  render(<Robot action={action }/>)

  const button = screen.getByRole('button');
  expect(button).not.toBeDisabled();
  fireEvent.click(button);
  expect(button).toBeDisabled();
  await action()
  expect(button).not.toBeDisabled();

})