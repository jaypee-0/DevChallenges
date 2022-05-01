import React from 'react'
import './Navbar.scss'
import { useState } from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <div className='container py-3'>
        <div id="Navbar" className='d-flex navbar-container'>
            <span className='navbar-logo' onClick={closeMobileMenu}><span className='py-2 px-3'>THIS INTERIOR</span></span>
                    <div className='menu-icon' onClick={handleClick}>
                        <FA icon={click ? 'times': 'bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <span className='nav-links' onClick={closeMobileMenu}>Home</span>
                    </li>
                    <li className='nav-item'>
                        <span className='nav-links' onClick={closeMobileMenu}>About</span>
                    </li>
                    <li className='nav-item'>
                        <span className='nav-links' onClick={closeMobileMenu}>Products</span>
                    </li>
                    <li className='nav-item'>
                        <span className='nav-links' onClick={closeMobileMenu}>Contacts</span>
                    </li>                  
                </ul>                
                </div>
    </div>
  )
}

export default Navbar