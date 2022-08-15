import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                result => {
                    console.log(result.text);
                    setDone(true);
                    e.target.reset();
                },
                error => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="contact-form" id="Contact">
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>
                        Ponerse en contacto
                    </span>
                    <span>Contactame</span>
                    <div
                        className="blur s-blurl"
                        style={{ background: '#abf1ff94' }}
                    ></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        className="user"
                        placeholder="Nombre"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        className="user"
                        placeholder="Email"
                        required
                    />
                    <textarea
                        name="user_message"
                        className="user"
                        placeholder="Mensaje"
                        required
                    />
                    <input type="submit" value="Enviar" className="button" />
                    <span>
                        {done &&
                            'Grácias por contactarme, en breve recibirás una respuesta.'}
                    </span>
                    <div
                        className="blur c-blurl"
                        style={{ background: 'var(--purple)' }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
