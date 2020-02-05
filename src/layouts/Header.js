import React, { Component } from 'react';
import '../styles/layouts/Header.scss';
//logo
import logo from '../images/logo/img-logo.png';
//components
import SearchField from '../components/SearchField';
import UserField from '../components/UserField';


class Header extends Component {
    state = {  }
    render() { 
        return (
            <header className="header">
                <SearchField />
                    <img src={logo} alt="logo"></img>
                <UserField />
            </header>
        );
    }
}
 
export default Header;