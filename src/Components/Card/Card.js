import React from 'react';
import './Card.css';

const Card = ({ icon, heading, details, url }) => {
    return (
        <div className="card">
            <img src={icon} alt="" width={'110px'} height={'110px'} />
            <span>{heading}</span>
            <span>{details}</span>
            <a href={url}>
                <button className="c-button">Saber más</button>
            </a>
        </div>
    );
};

export default Card;
