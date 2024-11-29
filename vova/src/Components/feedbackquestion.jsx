import "./ComponentsStyle/FeedbackStyle.css"
import Button1 from "./Button1.jsx";
import FAQ from "./FAQ.jsx";


function Feedbackquestion() {
    return (
        <>
            <div className="feedMain">
                <div className="feedbackquestion_left">
                    <div className="feedbackquestion_title">
                        <h1>Оформить заказ</h1>
                        <p>Обсудите все детали заказа по телефону
                            или сами укажите все подробности онлайн</p>
                    </div>
                    <div className="feedbackquestion_input">
                        <p>Имя</p>
                        <input type="text"/>
                    </div>
                    <div className="feedbackquestion_input">
                        <p>Номер телефона</p>
                        <input type="text"/>
                    </div>
                    <div className="feedbackquestion_input_check">
                        <div className="feedbackquestion_input_check_check_1">
                            <input type="radio"/>
                            <p>Тест-день! Получить скидку -30%?</p>
                        </div>
                        <div className="feedbackquestion_input_check_check_1">
                            <input type="radio" />
                            <p>Согласен с <span className="span1">условиями сотрудничества</span></p>
                        </div>


                    </div>
                    <div className="feedbackquestion_button">
                        <button className="zakaz">Заказ по телефону</button>
                        <p>ИЛИ</p>
                        <Button1 text={"Онлайн заказ"}></Button1>
                    </div>
                </div>
                <div className="feedbackquestion_right">

                    <FAQ></FAQ>
                </div>
            </div>
        </>
    )
}

export default Feedbackquestion;