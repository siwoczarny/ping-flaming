import React from 'react';
import '../styles/components/Task.scss';
import editIcon from '../icons/edit/edit.png';
import deleteIcon from '../icons/delete/delete.png';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
// import ModalEditTask from './ModalEditTask';


const Task = (props) => {

    const { key, id, text, description } = props.task;
    const [open, setOpen] = React.useState(false);
    let list = null;

    function handleSelect(e) {
        list = e.target.value;        
    }

    function handleSave() {
        props.edit(id, list);
        setOpen(false);
    }
    
    return (
        <div className="task" key={key}>
            <h6>{text}</h6>
            <p>
                <span>Opis</span><br/>
                {description}
            </p>
            <div className="task_buttons">
                <button onClick={() => props.delete(id)} >
                    <img src={deleteIcon} alt="icon"></img>
                    <p>Usuń</p>
                </button>
                <button onClick={() => setOpen(true)} >
                    <img src={editIcon} alt="icon"></img>
                    <p>Edytuj</p>
                </button>
            </div>
            {open ? 
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
                        <Button variant="secondary" onClick={() => setOpen(false)}>
                            Anuluj
                        </Button>
                        <Button variant="primary" onClick={handleSave} >
                            Zapisz
                        </Button>
                        </Modal.Footer>
                    </Modal.Dialog> 
            : null}
        </div>
    );
}
 
export default Task;