import React from 'react';
import './Nav.css';

const Nav = (props) => {
    return (
        <div className="profileNav">
            <nav className="navBar">
                <a href="/repos">Repos: <span>{props.repos}</span></a>
                <a href="/followers">Followers: <span>{props.followers}</span></a>
                <a href="/following">Following: <span>{props.following}</span></a>
            </nav>
        </div>
    );
};

export default Nav;

