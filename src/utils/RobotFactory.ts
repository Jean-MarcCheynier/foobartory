import { LineEnum } from '../features/factory/factorySlice';
import { IRobot } from './../interfaces/Robot';
import { v4 as uuidv4 } from 'uuid';

export default class RobotFactory {

    static createRobot = (activity?: LineEnum):IRobot  => {
        return { 
            id: uuidv4(), 
            busy: false, 
            changingActivity: false, 
            activity: activity
        }
    }
}