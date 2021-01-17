import React from 'react';
import logo from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип Место"></img>
        </header>
    );
}
export default Header;