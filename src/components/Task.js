import React from 'react';
import '../styles/components/Task.scss';
import editIcon from '../icons/edit/edit.png';
import deleteIcon from '../icons/delete/delete.png';

const Task = (props) => {

    const { id, text, description } = props.task;    
    
    return (
        <div className="task" key={props.task.key}>
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
                <button>
                    <img src={editIcon} alt="icon"></img>
                    <p>Edytuj</p>
                </button>
            </div>
            
        </div>
    );
}
 
export default Task;