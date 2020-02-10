import React from 'react';
import '../styles/components/Task.scss';
import editIcon from '../icons/edit/edit.png';
import deleteIcon from '../icons/delete/delete.png';
import EditTask from './EditTask';


const Task = (props) => {

    const { key, id, text, description } = props.task;
    const [open, setOpen] = React.useState(false);

    function handleEdit() {
        setOpen(true);
    }

    function handleClose() {
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
                <button onClick={handleEdit} >
                    <img src={editIcon} alt="icon"></img>
                    <p>Edytuj</p>
                </button>
            </div>
            {open ? <EditTask id={id} edit={props.edit} close={handleClose} /> : null}
        </div>
    );
}
 
export default Task;