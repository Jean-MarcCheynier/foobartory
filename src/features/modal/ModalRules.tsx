import { useState } from "react";
import { Modal, Button } from "react-bootstrap"
import { rules } from './../../utils/rules';

const ModalRules: React.FC<any> = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Foobartory rules</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <strong>{`Try to get ${rules.VICTORY} robots as fast as you can`}</strong>
            <div>In each production line of the foobartory robots can perform a different action in a specific time lapse. They can :  </div>
            <ul>
                <li>{`Mine 'Foo' on the blue line (cost ${rules.FOO_MINING_TIME/1000} seconds)`}</li>
                <li>{`Mine 'Bar' on the red line (const ${rules.BAR_MINING_MIN_TIME/1000} to ${rules.BAR_MINING_MAX_TIME/1000} seconds)`}</li>
                <li>{`Asemble a 'Foo' and a 'Bar' on the purple line to craft a 'Foobar'. ( cost ${rules.FOOBAR_CRAFTING_TIME/1000} seconds, and ${rules.FOOBAR_CRAFTING_CHANCE*100}% chance of success. If it fails, the 'Foo' is lost)`}</li>
                <li>{`Buy new robots on the green line (cost ${rules.ROBOT_PRICE} 'foobars'), 0 seconds`}</li>
            </ul>
            <div>{`Use the buttons of the robot to change production line, the robot needs ${rules.ACTIVITY_SWAPPING_TIME/1000} seconds to change activity. The timer will start when the first robot is on a line.`}</div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose} variant="primary">Let's play</Button>
        </Modal.Footer>
    </Modal>
}

export default ModalRules;