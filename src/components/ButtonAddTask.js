import React from 'react';
import '../styles/components/ButtonAddTask.scss'
import plus from '../images/sign/simple.png';

const ButtonAddTask = () => {
    return (
        <button><img src={plus} alt="add task"></img></button>
    );
}
 
export default ButtonAddTask;