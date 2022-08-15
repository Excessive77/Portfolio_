import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">JorgeLR</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to="Navbar" smooth={true}>
                            <li>Inicio</li>
                        </Link>
                        <Link spy={true} to="Services" smooth={true}>
                            <li>Servicios</li>
                        </Link>
                        <Link spy={true} to="Portfolio" smooth={true}>
                            <li>Portafolio</li>
                        </Link>
                        <Link spy={true} to="AboutMe" smooth={true}>
                            <li>Acerca de</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    <Link spy={true} to="Contact" smooth={true}>
                        Contactame
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
