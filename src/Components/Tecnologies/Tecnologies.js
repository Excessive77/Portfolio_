import React from 'react';
import './Tecnologies.css';
import ReactLogo from '../../img/react.png';
import Node from '../../img/node.png';
import Mongo from '../../img/mongo.png';
import Postgres from '../../img/postgres.png';
import Js from '../../img/js.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Tecnologies = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="tecnologies">
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Mis</span>
                <span>Tecnologías</span>
                <span>
                    ReactJS
                    <br />
                    Librería de JavaScript para agilizar el desarrollo del lado
                    del cliente.
                    <br />
                    <br />
                    NodeJS
                    <br />
                    JavaScrip pero del lado del servidor.
                    <br />
                    <br />
                    PostgreSQL y MongoDB
                    <br />
                    Bases de datos para el almacenamiento y control de la
                    información <br /> por parte de la empresa.
                </span>
                <div className="blur s-blurl"></div>
            </div>
            {/* Rigth side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-mainCircle"
                >
                    <div className="w-secCircle">
                        <img
                            src={Node}
                            alt=""
                            width={'120px'}
                            height={'120px'}
                        />
                    </div>
                    <div className="w-secCircle">
                        <img
                            src={ReactLogo}
                            alt=""
                            width={'90px'}
                            height={'90px'}
                        />
                    </div>
                    <div className="w-secCircle">
                        <img src={Js} alt="" width={'130px'} height={'130px'} />
                    </div>
                    <div className="w-secCircle">
                        <img
                            src={Mongo}
                            alt=""
                            width={'115px'}
                            height={'115px'}
                        />
                    </div>
                    <div className="w-secCircle">
                        <img
                            src={Postgres}
                            alt=""
                            width={'90px'}
                            height={'90px'}
                        />
                    </div>
                </motion.div>
                {/* Background circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Tecnologies;
