import React from 'react'
import { render, fireEvent, waitFor, screen, within } from '../../../utils/test-utils'
import '@testing-library/jest-dom'

import Factory from './../Factory';
import { rules } from './../../../utils/rules';
import { LineEnum } from '../factorySlice';
import RobotFactory from './../../../utils/RobotFactory';
import App from '../../../App';


test('Start the game - First move', async () => {

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
        const fooMiningLine = screen.getByRole('line', { name: "line-fooMining" });
        return within(fooMiningLine).getByRole('robot')
    })
    expect(within(screen.getByRole('line', { name: "line-fooMining" }))
        .getAllByRole('robot'))
        .toHaveLength(rules.NB_ROBOTS_START-1);
    
})



// Example of test with a preloaded state ( case scenario moving a robot to the shop to perform activity 'buy robots')
jest.setTimeout(10000);
test('Move to shop and buy', async () => {
    //Init state with enough crafted foobars 
    const robotObj = RobotFactory.createRobot(LineEnum.BENCH)
    const foobarArray = [];
    for(let i=0; i<rules.ROBOT_PRICE; i++) {
        foobarArray.push({})
    }

    const preloadedState: any = {
        factory: {
            producing: false,
            robotMap: {
                [robotObj.id]:robotObj
            },
            line: {
                [LineEnum.FOO_MINING]: [],
                [LineEnum.BAR_MINING]: [],
                [LineEnum.FOOBAR_CRAFTING]: [],
                [LineEnum.SHOPPING]: [],
                [LineEnum.BENCH]: [robotObj.id],
            },
            prod: {
                foo: [],
                bar: [],
                foobar: foobarArray,
            },
            workshop: {
                craft: [],
                craftAttempts: 0
            }
        }
    }

    render(<App/>, { preloadedState })
 
    const goToShopBtn = screen.getByRole('button', { name: "go-to-shopping"});
    expect(goToShopBtn).not.toBeUndefined();
    
    fireEvent.click(goToShopBtn);
    await waitFor(() => {
        const shopingLine = screen.getByRole('line', { name: "line-shopping" });
        return within(shopingLine).getByRole('robot')
    })

    expect(screen.getByRole('counter', { name: 'foobar count'})).toHaveTextContent(`${rules.ROBOT_PRICE}` )
    expect(screen.getByRole('counter', { name: 'robot count'})).toHaveTextContent(`1 / ${rules.VICTORY}`)

    await new Promise<void>((resolve) => setTimeout(() => resolve(), rules.ACTIVITY_SWAPPING_TIME))

    expect(screen.getByRole('counter', { name: 'foobar count'})).toHaveTextContent('0')
    expect(screen.getByRole('counter', { name: 'robot count'})).toHaveTextContent(`2 / ${rules.VICTORY}`)
})

