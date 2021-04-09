import React from 'react'
import PropTypes from 'prop-types'
// Use link instead of <a href> to keep states... wont do a complete refresh like a standard <a href> tag
import { Link } from 'react-router-dom';

// classes have states
// we are going to convert to functional components

const Navbar = ({ icon, title }) => {
    // Default Props

        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={icon} />{title}
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        );
};

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};
// Prop Types: type checking
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Navbar
