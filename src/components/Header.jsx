import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='navbar'> 
    <div className='navbar-left'> 
        <h4 className='nav-title'>Valorant For Noobs</h4>
    </div>
        <ul className='navbar-right'> 
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/agents'>Agents</Link> </li>
            <li> <Link to='/maps'>Maps</Link> </li>
            <li> <Link to='/1'>Look Up Match</Link> </li> 
            {/* need to use other server to get match info based on ID */}
        </ul>
    </header>
  )
}
