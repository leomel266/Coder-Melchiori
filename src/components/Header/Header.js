import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Header.css'
import logo from './img/logo.png'

const Header = () => {
    return (
        <header className='header main-header mt-2 mb-2'>
            <div className='container-Header'>
            <h1 class="mh-logo" style={{fontWeight:'bold'}}>
            <Link style={{textDecoration:'none', color:'black'}} to='/'>Flash<span style={{color:'#57be6c'}}>Agro</span></Link>
			<img src={logo} width="50" height="50" alt="Flexbox.ninja"/>
		    </h1>
                <NavBar/>
            </div>
            
        </header>
    );
}

export default Header;
