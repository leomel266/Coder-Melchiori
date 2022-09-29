import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css'
import logo from './img/logo.png'

const Header = () => {
    return (
        <header className='header main-header'>
            <div className='container-Header'>
            <h1 class="mh-logo" style={{fontWeight:'bold'}}>
            Fast<span style={{color:'#57be6c'}}>Agro</span>
			<img src={logo} width="50" height="50" alt="Flexbox.ninja"/>
		    </h1>
                <NavBar/>
            </div>
            
        </header>
    );
}

export default Header;
