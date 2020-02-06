import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import '../styles/layouts/TaskModal.scss';
import plus from '../images/sign/simple.png';

class TaskModal extends Component {
    state = {
        setShow: false,
        text: '',
        description: '',
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

    handleText = (e) => {
        this.setState({
            text: e.target.value,
        }) 
    }


    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleClick = () => {
        const { text, description } = this.state;
        const add = this.props.add(text, description);
        if(add) {
            this.setState({
                text: '',
                description: '',
            })
        }
        this.setState({
            setShow: false
        })
    }

    render() { 
        const show = this.state.setShow;
        return (
            <>
            <Modal
                show={this.state.setShow}
                onHide={this.handleHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj nowe zadanie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form">
                        <label htmlFor="text">Tytuł</label><br/>
                        <input type="text" placeholder="Wpisz tytuł swojego zadania..." value={this.state.text} onChange={this.handleText} /><br/>
                        <label htmlFor="text">Opis</label><br />
                        <textarea type="text" placeholder="Opisz zadanie, stwórz kryteria akceptacji zadania lub dodaj niezbędne informacje o tym zadaniu..." value={this.state.description} onChange={this.handleDescription} /><br/>
                        <label htmlFor="select">Status</label><br/>
                        <select defaultValue={"default"} name="status">
                            <option value="default" disabled>Wybierz status zadania</option>
                            <option value="to-do">Do zrobienia</option>
                            <option value="in-progress">W trakcie</option>
                        </select>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleHide}>
                    Anuluj
                </Button>
                <Button variant="primary" disabled={!this.state.text} onClick={this.handleClick}>
                    Zatwierdź zmiany
                </Button>
                </Modal.Footer>
            </Modal>
            {show ? null : <Button variant="link" onClick={this.handleShow} ><img src={plus} alt="add task"></img></Button>}
            </>
        );
    }
}
 
export default TaskModal;