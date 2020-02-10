import React from 'react';
import '../styles/layouts/Header.scss';
//logo
import logo from '../images/logo/img-logo.png';
//components
import SearchField from '../components/SearchField';
import UserField from '../components/UserField';


const Header = (props) => {
    return (
        <header className="header">
            <SearchField search={props.search}/>
                <img src={logo} alt="logo"></img>
            <UserField />
        </header>
    );
}
 
export default Header;