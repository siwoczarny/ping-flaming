import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/components/OpenTaskModal.scss';
import plus from '../images/sign/simple.png';
import TaskModal from './TaskModal';

class OpenTaskModal extends Component {
    state = {
        show: false,
        setShow: false,
    }

    handleShow = () => {
        const visibility = this.state.setShow
        this.setState({
            setShow : !visibility
        })
        console.log(this.state.setShow)
    }

    handleHide = () => {
        this.setState({setShow : false})
    }

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
 
export default OpenTaskModal;