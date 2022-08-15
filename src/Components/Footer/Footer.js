import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Whats from '@iconscout/react-unicons/icons/uil-whatsapp';
import GitHub from '@iconscout/react-unicons/icons/uil-github';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span>jorgelp122@gmail.com</span>
                <div className="f-icons">
                    <a href="https://wa.link/osia3r">
                        <Whats color="black" size="3rem" />
                    </a>
                    <a href="https://github.com/Excessive77">
                        <GitHub color="black" size="3rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/jorge-l%C3%B3pez-romero-29122321b/">
                        <LinkedIn color="black" size="3rem" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
