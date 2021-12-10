import { Bar } from "../../interfaces/Bar";
import { Foo } from "../../interfaces/Foo";
import { rules } from "../../utils/rules";
import { Foobar } from '../../interfaces/Foobar';
import { IRobot } from '../../interfaces/Robot';
import RobotFactory from './../../utils/RobotFactory';

// A mock function to mimic making an async request for 'Foo' mining
export function mineFoo() {
  const newFoo: Foo = {} 
  return new Promise<{ data: Foo }>((resolve) =>
    setTimeout(() => resolve({ data: newFoo }), rules.FOO_MINING_TIME)
  );
}

// A mock function to mimic making a request for 'Bar' mining
export function mineBar() {
  const newBar: Bar = {}
  return new Promise<{ data: Bar }>((resolve) => {
    const miningTime = Math.random()*(rules.BAR_MINING_MAX_TIME - rules.BAR_MINING_MIN_TIME) + rules.BAR_MINING_MIN_TIME
    setTimeout(() => resolve({ data: newBar }), miningTime)
  });
}

// A mock function to mimic making a request for swapping activity
export function changeLine() {
  return new Promise<void>((resolve) =>
    setTimeout(() => resolve(), rules.ACTIVITY_SWAPPING_TIME)
  );
}

// A mock function to mimic making a request for 'Foobar' crafting
export function craftFoobar() {
  return new Promise<{ data: Foobar }>((resolve, reject) =>
    setTimeout(() => {
      const craftResult = Math.random();
      const success = craftResult < rules.FOOBAR_CRAFTING_CHANCE;
      if (success) {
        const newFoobar: Foobar = {}
        resolve({ data: newFoobar })
      } else {
        reject()
      }
    }, rules.FOOBAR_CRAFTING_TIME)
  );
}

// A mock function to mimic making a request for 'Foobar' crafting
export function buyRobot() {
  return new Promise<{ data: IRobot }>((resolve, reject) => {
    resolve({ data: RobotFactory.createRobot() })
  });
}


