import React from 'react'
import { render, fireEvent, waitFor, screen, within } from '../../../utils/test-utils'
import '@testing-library/jest-dom'

import Factory from './../Factory';
import { IRobot } from './../../../interfaces/Robot';
import { rules } from './../../../utils/rules';


test('Initial state of the factory', async () => {

    render(<Factory/>)
    // Check if lines are present
    const lines = screen.getAllByRole('line');
    expect(lines).toHaveLength(5);
    // Check initial robots on the bench
    const benchList = screen.getByRole('line', { name: "line-benching" });
    const benchingRobots = within(benchList).getAllByRole('robot')
    expect(benchingRobots).toHaveLength(rules.NB_ROBOTS_START);
    // Check changeLine
    const robot = benchingRobots[1];
    const buttonList = within(robot).getAllByRole('button');
    expect(buttonList).toHaveLength(4);
    // Check presence of the button go to fooMining
    const goToFooMiningBtn = within(robot).getByRole('button', { name: "go-to-fooMining"});
    expect(goToFooMiningBtn).not.toBeUndefined();
    
    fireEvent.click(goToFooMiningBtn);
    await waitFor(() => {
        const fooMiningList = screen.getByRole('line', { name: "line-fooMining" });
        return within(fooMiningList).getByRole('robot')
    })
})