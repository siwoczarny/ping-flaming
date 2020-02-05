import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

const TaskModal = (props) => {

    const showModal = props.open;
    const hideModal = props.hide;

    return (
        <>
        <Modal show={showModal} onHide={hideModal}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
                Close
            </Button>
            <Button variant="primary" onClick={hideModal}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}
 
export default TaskModal;