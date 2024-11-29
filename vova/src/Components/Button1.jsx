import "./ComponentsStyle/Button1style.css"
import React from 'react';

const Button1 = ({ text, onClick }) => {
    return (
        <button className="Button1_1" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button1;