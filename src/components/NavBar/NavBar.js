import React from 'react';
import './style.css'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
            </div>
            <div>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                </ul>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    );
}



export default NavBar;
