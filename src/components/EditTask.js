import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const EditTask = (props) => {

    const id = props.id;
    let list = null;

    function handleSelect(e) {
        list = e.target.value;        
    }

    function handleSave() {
        if(list) {
        props.edit(id, list);
        } else {
            alert('Ustaw status zadania');
        }        
    }
    return (
        <Modal.Dialog>
            <Modal.Header className="text-center">
                <Modal.Title>Edytuj zadanie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="form">
                <label htmlFor="select">Status<span>*</span></label><br/>
                <select defaultValue={"default"} className="form-control" name="status" onChange={handleSelect}>
                    <option value="default" disabled>Zmień status zadania</option>
                    <option value="to-do">Do zrobienia</option>
                    <option value="in-progress">W trakcie</option>
                    <option value="done">Zrobione</option>
                    <option value="canceled">Anulowane</option>
                </select>
            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
                Anuluj
            </Button>
            <Button variant="primary" onClick={handleSave} >
                Zapisz
            </Button>
            </Modal.Footer>
        </Modal.Dialog> 
    );
}
 
export default EditTask;