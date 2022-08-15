import React from 'react';
import './AboutMe.css';
import Me from '../../img/Me.jpg';

const AboutMe = () => {
    return (
        <div className="a-wrapper" id="AboutMe">
            <div className="a-heading">
                <span>
                    Un poco <br />{' '}
                </span>
                <span>acerca de mí...</span>
                <div
                    className="blur a-blurl"
                    style={{ background: 'var(--purple)' }}
                ></div>
                <div
                    className="blur a-blur2"
                    style={{ background: 'skyblue' }}
                ></div>
            </div>
            <div className="me">
                <div className="me-card">
                    <img src={Me} alt="" />
                    <span>
                        Hola, mi nombre es Jorge y soy desarrollador de
                        Software.
                        <br />
                        Actualmente tengo 24 años, soy originario de México. Me
                        apasiona mucho la programación, comencé de manera
                        autodidacta cuando egresé de la universidad y por
                        consiguiente realicé un Bootcamp en Academlo. <br />
                        Soy altamente adaptable a cualquier tecnología. <br />{' '}
                        Soy un desarrollador que disfruta más el ambiente del
                        Backend pero qué sin ningún tipo de problema puede
                        desempeñarse de manera adecuada en distintos roles.
                    </span>
                    <br />
                    <span>
                        ¿Es Ingeniero el qué no hace Ingeniería o lo dicta un
                        papel?
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
