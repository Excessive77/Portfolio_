import React from 'react';
import './Intro.css';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import WhatsApp from '../../img/whatsapp.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Me from '../../img/My_img.png';
import ReactLogo from '../../img/react-sinbg.png';
import Node from '../../img/node-sinbg.png';
import Glasses from '../../img/glasses-removebg.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {
    const transition = { duration: 2, type: 'spring' };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro" id="Home">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>
                        Hola! soy
                    </span>
                    <span>Jorge López</span>
                    <span>
                        Desarrollador Web FullStack. Amante del deporte con
                        pesas, los videojuegos y de los gatos. Inicié de manera
                        autodidacta en el mundo del desarrollo web en el año
                        2021 cuando egrese de la universidad
                    </span>
                </div>
                <button className="button i-button">
                    <Link spy={true} to="Contact" smooth={true}>
                        Contratame
                    </Link>
                </button>
                <div className="i-icons">
                    <a href="https://github.com/Excessive77">
                        <img src={GitHub} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/jorge-l%C3%B3pez-romero-29122321b/">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="https://wa.link/osia3r">
                        <img
                            src={WhatsApp}
                            alt=""
                            height={'90px'}
                            width={'90px'}
                        />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" height={'660px'} width={'760px'} />
                <img src={Me} alt="" height={'700px'} width={'580px'} />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-25%' }}
                    transition={transition}
                    src={Glasses}
                    alt=""
                />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '52%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '52%' }}
                    className="floating-div"
                >
                    <FloatingDiv
                        image={Node}
                        txt1="Desarrollador"
                        txt2="Backend"
                    />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }}
                    className="floating-div"
                >
                    <FloatingDiv
                        image={ReactLogo}
                        txt1="Desarrollador"
                        txt2="Frontend"
                    />
                </motion.div>
                {/* Blur divs */}
                <div
                    className="blur"
                    style={{ backgound: 'rgba(238 210 255' }}
                ></div>
                <div
                    className="blur"
                    style={{
                        background: '#a9f0fc',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
