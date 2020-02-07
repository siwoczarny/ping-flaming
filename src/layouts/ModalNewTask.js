import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import '../styles/layouts/TaskModal.scss';
import plus from '../images/sign/simple.png';

class ModalNewTask extends Component {
    state = {
        setShow: false,
        text: '',
        description: '',
        list: '',
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
            text: e.target.value
        }) 
    }


    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleSelect = (e) => {
        this.setState({
            list: e.target.value
        })        
    }

    handleClick = () => {
        const { text, description, list } = this.state;
        if(list) {
            const add = this.props.add(text, description, list);
        
            if(add || text.length >=1) {
                this.setState({
                    setShow: false,
                    text: '',
                    description: '',
                    list: '',
                })
            }
        } else {
            alert('Ustaw status zadania');
        }
    }

    render() { 
        const show = this.state.setShow;
        return (
            <>
            <Modal
                show={this.state.setShow}
                onHide={this.handleHide}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header className="text-center" closeButton>
                    <Modal.Title>Dodaj nowe zadanie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form">
                        <label htmlFor="text">Tytuł<span>*</span></label><br/>
                        <input type="text" placeholder="Wpisz tytuł swojego zadania..." value={this.state.text} onChange={this.handleText} /><br/>
                        <label htmlFor="text">Opis</label><br />
                        <textarea type="text" placeholder="Opisz zadanie, stwórz kryteria akceptacji zadania lub dodaj niezbędne informacje o tym zadaniu..." value={this.state.description} onChange={this.handleDescription} /><br/>
                        <label htmlFor="select">Status<span>*</span></label><br/>
                        <select defaultValue={"default"} className="form-control" name="status" onChange={this.handleSelect}>
                            <option value="default" disabled>Wybierz status zadania</option>
                            <option value="todo">Do zrobienia</option>
                            <option value="progress">W trakcie</option>
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
 
export default ModalNewTask;