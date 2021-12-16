import React from 'react';

import { LineEnum } from '../factory/factorySlice';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './RobotIconActive.module.scss'
import { GiMiner, GiSolderingIron } from 'react-icons/gi';
import { ImSpinner2 } from 'react-icons/im';


interface IRobotIconActiveProps {
    line: LineEnum
}
const RobotIconActive: React.FC<IRobotIconActiveProps> = (props) => {
    const { line } = props;

    let Component;
    let classIcon = `${styles.RobotIcon} ${styles[`RobotIcon--${line}`]}`
    switch(line) {
        case LineEnum.FOO_MINING:
        case LineEnum.BAR_MINING:
            Component = GiMiner
            break;
        case LineEnum.FOOBAR_CRAFTING:
            Component = GiSolderingIron;
            break;
        case LineEnum.SHOPPING:
            Component = FaShoppingCart
            break;
        default:
            Component = ImSpinner2
            classIcon = `${styles.RobotIcon} ${styles[`RobotIcon--spinning`]}`
    }
    
    return <Component className={classIcon}/>
 }


export default RobotIconActive;