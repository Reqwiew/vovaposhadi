import React, { useState } from 'react';
import './ComponentsStyle/listvert_style.css';
import fish from "./picc/fish.svg";
import mork from "./picc/mork.svg";
import bottle from "./picc/bottle.svg";
import meat from "./picc/meat.svg";
import stol from "./picc/stol.svg";



const VerticalButtons = () => {
    // Массив с объектами для каждой кнопки, включая картинку и текст
    const buttonContents = [
        { imgSrc: fish, text: 'рыба' },
        { imgSrc: mork, text: 'глушитель' },
        { imgSrc: bottle, text: 'стул' },
        { imgSrc: meat, text: 'свежее мясо' },
        { imgSrc: stol, text: 'да' },
    ];

    // Состояние для отслеживания, какая кнопка активна
    const [activeIndex, setActiveIndex] = useState(null);

    // Обработчик клика по кнопке
    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // если кнопка уже активна, скрываем текст
    };

    return (
        <div className="list">
            {buttonContents.map((content, index) => (
                <div key={index} className="button-container">
                    <button className="image-button" onClick={() => handleClick(index)}>
                        <img src={content.imgSrc} alt={`button ${index + 1}`} />
                    </button>
                    {activeIndex === index && (
                        <div className="text-slide">{content.text}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default VerticalButtons;