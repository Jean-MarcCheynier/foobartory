import { LineEnum } from "../factory/factorySlice"
import { Button } from 'react-bootstrap';
import styles from './Robot.module.scss';

interface IButtonChangeLineProps {
    line: LineEnum;
    activeLine?: LineEnum;
    onChangeLine: (line: LineEnum) => any
}

const ButtonChangeLine: React.FC<IButtonChangeLineProps> = ({line, activeLine, onChangeLine, children}) => {
    return <Button aria-label={`go-to-${line}`} 
        className={`${styles.Button} ${styles[`Button--${line}`]}`} 
        disabled={activeLine===line}
        onClick={() => onChangeLine(line)}
        >{children}</Button>
}

export default ButtonChangeLine;