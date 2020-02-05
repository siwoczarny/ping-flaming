import React, { Component } from 'react';
import '../styles/components/AddTask.scss';

class AddTask extends Component {
    state = {  }
    render() { 
        return ( 
            <form className="form">
                <label htmlFor="text">Tytuł</label><br/>
                <input type="text" placeholder="Wpisz tytuł swojego zadania..."/><br/>
                <label htmlFor="text">Opis</label><br />
                <textarea type="text" placeholder="Opisz zadanie, stwórz kryteria akceptacji zadania lub dodaj niezbędne informacje o tym zadaniu..."/><br/>
                <label htmlFor="select">Status</label><br/>
                <select defaultValue={"default"} name="status">
                    <option value="default" disabled>Wybierz status zadania</option>
                    <option value="to-do">Do zrobienia</option>
                    <option value="in-progress">W trakcie</option>
                </select>
            </form>
        );
    }
}
 
export default AddTask;