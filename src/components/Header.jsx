import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='navbar'> 
        <h4 className='navbar-left'>Welcome to Valorant</h4>
        <ul className='navbar-right'> 
            <li> <Link to='/agents'>Agents</Link> </li>
            <li> <Link to='/weapons'>Weapons</Link> </li>
            <li> <Link to='/maps'>Maps</Link> </li>
        </ul>
    </header>
  )
}
