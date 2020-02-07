import React from 'react';
import Task from '../components/Task'
import '../styles/layouts/TaskList.scss';

const TaskList = (props) => {
    
    const toDo = props.tasks.filter(task => task.list === "todo");
    const progress = props.tasks.filter(task => task.list === "progress");
    
    const toDoList = toDo.map(task => <Task key={task.id} task={task} delete={props.delete} /> );
    const progressList = progress.map(task => <Task key={task.id} task={task} delete={props.delete} /> );

    return (
        <div className="list">
            <div className="list_column">               
                <h5 className="list_status">Do zrobienia</h5>
                {toDoList}
            </div>
            <div className="list_column">               
                <h5 className="list_status">W trakcie</h5>
                {progressList}
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