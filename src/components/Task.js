import React from 'react';
import '../styles/components/Task.scss';

const Task = (props) => {

    const { text, description } = props.task;    
    
    return (
        <div className="task">
            <p>
                <strong>{text}</strong><br />
                {description}
            </p>
            <button>Usuń</button>
            <button>Edytuj</button>
        </div>
    );
}
 
export default Task;