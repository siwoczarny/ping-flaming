import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import '../styles/components/TaskModal.scss';
import AddTask from './AddTask';

const TaskModal = (props) => {

    const showModal = props.open;
    const hideModal = props.hide;

    return (
        <>
        <Modal
            show={showModal}
            onHide={hideModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title>Dodaj nowe zadanie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddTask />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
                Anuluj
            </Button>
            <Button variant="primary" onClick={hideModal}>
                Zatwierdź zmiany
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}
 
export default TaskModal;