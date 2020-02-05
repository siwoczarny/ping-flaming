import React from 'react';
// import Task from '../components/Task'
import '../styles/layouts/TaskList.scss';

const TaskList = () => {
    return (
        <div className="list">
            <div className="list_column">               
                <h5 className="list_status">Do zrobienia</h5>
            </div>
            <div className="list_column">               
                <h5 className="list_status">W trakcie</h5>
            </div>
            <div className="list_column">               
                <h5 className="list_status">Zrobione</h5>
            </div>
            <div className="list_column">               
                <h5 className="list_status">Anulowane</h5>
            </div>
        </div>
    );
}
 
export default TaskList;