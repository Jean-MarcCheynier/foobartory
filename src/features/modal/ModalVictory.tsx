import { Modal, Button } from "react-bootstrap"
import { RootState } from "../../app/store";
import Counter from './../counter/Counter';
import { isVictory } from './../factory/factorySlice';
import { reset as resetFactory } from "./../factory/factorySlice";
import { reset as resetCounter } from "./../counter/counterSlice";
import { connect } from 'react-redux';

const ModalVictory: React.FC<{show: boolean, resetCounter: any, resetFactory: any }> = ({show, resetCounter, resetFactory}) => {

    const handleClose = () => {
        resetCounter();
        resetFactory();
    }

    return <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <h3 className="text-primary">You Won!</h3>
            <div className="text-primary"><Counter/></div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose} variant="primary">Play again</Button>
        </Modal.Footer>
    </Modal>
}

const mapStateToProps = (state: RootState) => ({
    show: isVictory(state)
})

const actionCreator = {
    resetCounter,
    resetFactory
}

export default connect(mapStateToProps, actionCreator)(ModalVictory);