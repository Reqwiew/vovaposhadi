import "./ComponentsStyle/Button2style.css"
import React from 'react';

const Button2 = ({ text,text2, onClick }) => {
    return (
        <button className="Button2_1" onClick={onClick}>
            <h1>{text}</h1>
            <p>{text2}</p>
        </button>
    );
};

export default Button2;