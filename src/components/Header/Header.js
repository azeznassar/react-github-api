import React from 'react';
import { Link } from 'react-router-dom';
import InputForm from '../InputForm/InputForm';
import './Header.css';

const Header = () => {
    return (
        <div className="appHeader">
            <Link className="headerTitle" to="/">
                <h1>Github profile lookup</h1>
            </Link>

            <InputForm />
        </div>
    );
};

export default Header;