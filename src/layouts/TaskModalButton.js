import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/layouts/TaskModalButton.scss';
import plus from '../images/sign/simple.png';
import TaskModal from '../components/TaskModal';

class TaskModalButton extends Component {
    state = {
        setShow: false,
    }

    handleShow = () => {
        const visibility = this.state.setShow
        this.setState({
            setShow : !visibility
        })
    }

    handleHide = () => {
        this.setState({setShow : false})
    }

    // handleSaveValues = () = {
    //     this.setState({setShow : false}),
    //     //here a function that will takes values and provide this data to the addTask component
    // }

    render() { 
        const show = this.state.setShow;
        return (
            <>
                <TaskModal open={this.state.setShow} hide={this.handleHide}/>
                {show ? null : <Button variant="link" onClick={this.handleShow} ><img src={plus} alt="add task"></img></Button>}
            </>
         );
    }
}
 
export default TaskModalButton;