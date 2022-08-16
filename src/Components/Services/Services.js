import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import Backend from '../../img/secure.jpg';
import Frontend from '../../img/user.png';
import Database from '../../img/db.png';
import Cv from './CV_Jorge.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = { duration: 1, type: 'spring' };
    return (
        <div className="services" id="Services">
            {/* Left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Mis</span>
                <span>Servicios</span>
                <span>
                    Desarrollo Frontend
                    <br />
                    Creación de sitios web del lado del cliente, totalmente
                    personalizados y <br />
                    completamente responsivos.
                    <br />
                    <br />
                    Desarrollo Backend
                    <br />
                    Contrucción de API Rest e implementación de seguridad para
                    los datos <br /> de los usuarios existentes.
                    <br />
                    <br />
                    Bases de Datos
                    <br />
                    Contrución de Bases de Datos para un buen manejo de la
                    información por <br /> parte del administrador.
                </span>
                <a href={Cv} download>
                    <button className="button s-button">Descargar CV</button>
                </a>
                <div className="blur s-blurl"></div>
            </div>
            {/* Rigth side */}
            <div className="cards">
                {/* first card */}
                <motion.div
                    initial={{ left: '25rem' }}
                    whileInView={{ left: '30rem' }}
                    transition={transition}
                    style={{
                        left: '25rem',
                    }}
                >
                    <Card
                        icon={Backend}
                        heading={'Backend'}
                        details={
                            'JavaScript, NodeJS, ExpressJS, JSON Web Tokens'
                        }
                        url={
                            'https://fp.uoc.fje.edu/blog/que-es-un-backend-developer/'
                        }
                    />
                </motion.div>
                {/* Second card */}
                <motion.div
                    initial={{ top: '12rem', left: '-11rem' }}
                    whileInView={{ left: '12rem' }}
                    transition={transition}
                    style={{
                        top: '12rem',
                        left: '6rem',
                    }}
                >
                    <Card
                        icon={Frontend}
                        heading={'Frontend'}
                        details={
                            'JavaScript, React, HTML, CSS, Responsive Design'
                        }
                        url={
                            'https://www.iebschool.com/blog/funciones-front-end-developer-analitica-usabilidad/'
                        }
                    />
                </motion.div>
                {/* Third card */}
                <motion.div
                    initial={{ top: '19rem', left: '25rem' }}
                    whileInView={{ left: '28rem' }}
                    transition={transition}
                    style={{ top: '19rem', left: '22rem' }}
                >
                    <Card
                        icon={Database}
                        heading={'Bases de Datos'}
                        details={
                            'PostgreSQL, MongoDB, Sequelize, Mongoose, MySQL'
                        }
                        url={'https://concepto.de/base-de-datos/'}
                    />
                </motion.div>
                <div
                    className="blur s-blur2"
                    style={{ background: 'var(--purple)' }}
                ></div>
            </div>
        </div>
    );
};

export default Services;
