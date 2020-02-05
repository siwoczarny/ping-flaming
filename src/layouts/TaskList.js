import React from 'react';
import '../styles/layouts/TaskList.scss';

const TaskList = () => {
    return (
        <div className="list">
            <div>
                <h5>Do zrobienia</h5>
            </div>
            <div>
                <h5>W trakcie</h5>
            </div>
            <div>
                <h5>Zrobione</h5>
            </div>
            <div>
                <h5>Anulowane</h5>
            </div>
        </div>
    );
}
 
export default TaskList;