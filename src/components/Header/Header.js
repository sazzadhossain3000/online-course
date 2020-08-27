import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome~Online~Course</h1>
            <nav>
                <a href="/Course">Course</a>
                <a href="/Review">Order Review</a>
                <a href="/manage">Manger Course</a>
            </nav>
        </div>
    );
};

export default Header;