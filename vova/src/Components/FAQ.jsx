import React, { useState } from 'react';
import "./ComponentsStyle/FAQstyle.css"
const FAQ = () => {
    // Состояние для отслеживания открытого вопроса
    const [openIndex, setOpenIndex] = useState(null);

    // Список часто задаваемых вопросов
    const faqs = [
        { question: 'Как осуществляется доставка правильного питания?', answer: 'почтой россии' },
        { question: 'Можно ли менять время доставки/место?', answer: 'жри чо дали' },
        { question: 'Как и в чем приезжает еда?', answer: 'в банках из под анализов' },
        { question: 'Когда Вы готовите?', answer: 'да' },
        { question: 'Какие продукты Вы используете?', answer: 'самые лучшие с помойки' },
        { question: 'Я буду есть одно и то же?', answer: 'да как и я блять верстать одни и те же сайты' },
        { question: 'У меня аллергия и непереносимость определенных продуктов', answer: 'нам безразлично' },
        { question: 'В какой очередности все есть?', answer: 'сначала 3-х литровую банку мочи потом чемодан говна' },
        { question: 'Можно ли замораживать программу?', answer: 'исключительно если ты умер' },
    ];

    // Функция для открытия/закрытия ответа
    const toggleAnswer = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Если ответ уже открыт, скрыть его
        } else {
            setOpenIndex(index); // Открыть ответ для выбранного вопроса
        }
    };

    return (
        <div>
            <h2>Часто задаваемые вопросы</h2>
            <div className="faq">
                {faqs.map((faq, index) => (
                    <div key={index} >
                        <div className="faq_question">
                            <button className="bu21" onClick={() => toggleAnswer(index)}>
                                {faq.question}
                            </button>
                        </div>
                        {/* Показать ответ, если текущий вопрос открыт */}
                        {openIndex === index && (
                            <div className="ccon2">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;