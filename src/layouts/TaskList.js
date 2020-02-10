import React from 'react';
import Task from '../components/Task'
import '../styles/layouts/TaskList.scss';

const TaskList = (props) => {
    
    const toDo = props.tasks.filter(task => task.list === "to-do");
    const progress = props.tasks.filter(task => task.list === "in-progress");
    const done = props.tasks.filter(task => task.list === "done");
    const canceled = props.tasks.filter(task => task.list === "canceled");
    
    const toDoList = toDo.map(task => <Task key={task.id} task={task} delete={props.delete} edit={props.edit} />);
    const progressList = progress.map(task => <Task key={task.id} task={task} delete={props.delete} edit={props.edit} />);
    const doneList = done.map(task => <Task key={task.id} task={task} delete={props.delete} edit={props.edit} />);
    const canceledList = canceled.map(task => <Task key={task.id} task={task} delete={props.delete} edit={props.edit} />);

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
                {doneList}
            </div>
            <div className="list_column">               
                <h5 className="list_status">Anulowane</h5>
                {canceledList}
            </div>
        </div>
    );
}
 
export default TaskList;