import React from 'react';
import userAvatar from '../images/user/oval.png';
//button & dropdown
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

function handleClickProfile() {
    alert('Wejście do profilu')
}

const UserField = () => {
    return (
        <div className="user">
            <img src={userAvatar} alt="avatar"></img>
            <Dropdown >
                <Button onClick={handleClickProfile}>emil.todd_87</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu >
                    <Dropdown.Item href="#">Wyloguj się</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
 
export default UserField;