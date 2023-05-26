import React from 'react'
import './Navlinks.css'

const Navlinks = () => {
    return (
        <>
            <nav>
                <div className='nav_logo'>LOGO</div>
                <ul className='nav_links'>
                    <li><a className='nav_links-items'>Home</a></li>
                    <li><a className='nav_links-items'>About</a></li>
                    <li><a className='nav_links-items'>Services</a></li>
                    <li><a className='nav_links-items'>Projects</a></li>
                </ul>
                <div className='nav_button'>
                    <button>Contact</button>
                </div>
            </nav>
        </>
    )
}

export default Navlinks
