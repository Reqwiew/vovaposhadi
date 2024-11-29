import "./ComponentsStyle/midBlockStyle.css"
import eco from "./picc/eco.svg"
import bludo from "./picc/bludo.svg"
import halava from "./picc/halava.svg"
import spi from "./picc/spiueba.svg"
import homa from "./picc/homa.svg"
import time from "./picc/time.svg"
import elips from "./picc/elips.svg"
import Button2 from "./Button2.jsx"
import Button1 from "./Button1.jsx";

function midBlock() {
    return (
        <>
            <div className="midBlock_main">
                <div className="midBlock_main_head">
                    <div className="midBlock_main_head_point">
                        <img src={eco} alt=""/>
                        <p>Бережём природу.
                            Эко-тара и проборы.</p>
                    </div>
                    <div className="midBlock_main_head_point">
                        <img src={bludo} alt=""/>
                        <p>28 дней без повторения,
                            более 300 блюд!</p>
                    </div>
                    <div className="midBlock_main_head_point">
                        <img src={halava} alt=""/>
                        <p>Бесплатно заменяем
                            блюда и ингредиенты.</p>
                    </div>
                    <div className="midBlock_main_head_point">
                        <img src={spi} alt=""/>
                        <p>Готовим ночью, упаковываем
                            и отправляем Вам!</p>
                    </div>
                    <div className="midBlock_main_head_point">
                        <img src={homa} alt=""/>
                        <p>Ежедневная удобная
                            и бесплатная доставка
                            с 6:00 до 10:00</p>
                    </div>
                    <div className="midBlock_main_head_point">
                        <img src={time} alt=""/>
                        <p>Сохраняем Вашу энергию
                            и до 14 часов в неделю
                            освобождая от готовки!</p>
                    </div>

                </div>

                <div className="midBlock_button">
                    <button>Программа питания</button>
                    <button>Специальная программа</button>
                </div>

                <div className="midBlock_kall">
                    <div className="midBlock_kall_point">
                        <Button2 text={"Express Fit"} text2={"800 ккал"}></Button2>
                    </div>

                    <div className="midBlock_kall_point">
                        <Button2 text={"slim"} text2={"1000 ккал"}> </Button2>

                    </div>

                    <div className="midBlock_kall_point">
                        <Button2 text={"fitness"} text2={"1300 ккал"}> </Button2>
                    </div>

                    <div className="midBlock_kall_point">
                        <Button2 text={"balance"} text2={"1600 ккал"}> </Button2>
                    </div>

                    <div className="midBlock_kall_point">
                        <Button2 text={"balance +"} text2={"1800 ккал"}> </Button2>
                    </div>

                    <div className="midBlock_kall_point">
                        <Button2 text={"strong"} text2={"2000 ккал"}> </Button2>
                    </div>

                    <div className="midBlock_kall_point">
                        <Button2 text={"maxi fit"} text2={"2400 ккал"}> </Button2>
                    </div>


                </div>
                <div className="midBlock_kall_main">
                    <div className="left">
                        <div className="midBlock_kall_green">
                            <div className="title_kall">
                                <h1>fitness</h1>
                                <h2>1300 ккал</h2>
                            </div>
                            <p>Программа здорового питания Express Fit.
                                Идеально для:
                                похудения в кратчайшие сроки,
                                повышения энергии и сил, снижения веса при
                                сидячем образе жизни.</p>
                        </div>
                        <div className="midBlock_kall_days">
                            <div className="day">
                                <p>Тестовый день</p>
                                <p>1 день</p>
                                <p>от 7 дней</p>
                                <p>от 14 дней</p>
                                <p>от 30 дней</p>
                                <p>Завтрак и ужин</p>
                            </div>
                            <div className="day">
                                <p>510 грн</p>
                                <p>ㅤ</p>
                                <p>510 грн</p>
                                <p>510 грн</p>
                                <p>510 грн</p>
                                <p>-15%</p>
                            </div>
                            <div className="day">
                                <p>357 грн</p>
                                <p>510 грн</p>
                                <p>490 грн</p>
                                <p>470 грн</p>
                                <p>445 грн</p>
                                <p>433 грн</p>
                            </div>
                        </div>
                        <Button1 text={"Заказать"}></Button1>
                    </div>
                    <div className="midBlock_kall_right">
                        <div className="right_top">
                            <p>ПН</p>
                            <p>ВТ</p>
                            <p>СР</p>
                            <p>ЧТ</p>
                            <p>ПТ</p>
                            <p>СБ</p>
                            <p>ВС</p>

                        </div>
                        <div className="pit_block">
                            <div className="col1">
                                <div className="col1_cont">
                                    <h2>Завтрак</h2>
                                    <p>7:00-9:00</p>
                                </div>
                                <div className="col1_cont">
                                    <h2>2-й Завтрак</h2>
                                    <p>10:00-12:00</p>
                                </div>
                                <div className="col1_cont">
                                    <h2>Обед</h2>
                                    <p>13:00-15:00</p>
                                </div>
                                <div className="col1_cont">
                                    <h2>Полдник</h2>
                                    <p>16:00-17:30</p>
                                </div>
                                <div className="col1_cont">
                                    <h2>Ужин</h2>
                                    <p>19:00-20:00</p>
                                </div>

                            </div>
                            <div className="col2">
                                <div className="col2_cont">
                                    <div className="col2_conts">
                                        <p>- Фриттата с сыром и кабачками</p>
                                        <p></p>
                                    </div>
                                    <p>170гр</p>
                                </div>
                                <div className="col2_cont">
                                    <div className="col2_conts">
                                        <p>- Фермерский йогурт
                                        </p>
                                        <p>- Полезное печенье из сухофруктов и орехов</p>
                                    </div>
                                    <p>170гр</p>
                                </div>
                                <div className="col2_cont">
                                    <div className="col2_conts">
                                        <p>- Люля-кебаб из индейки
                                        </p>
                                        <p>- Летний салат с маслинами и сыром</p>
                                    </div>
                                    <p>170гр</p>
                                </div>
                                <div className="col2_cont">
                                    <div className="col2_conts">
                                        <p>- Творожное суфле с какао и вишей</p>
                                        <p></p>
                                    </div>
                                    <p>170гр</p>
                                </div>
                                <div className="col2_cont">
                                    <div className="col2_conts">
                                        <p>- Рыбный терен
                                        </p>
                                        <p>- Овощи гриль</p>
                                    </div>
                                    <p>170гр</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>


            </div>
            <div className="elip_bl">
                <img src={elips} alt=""/>
            </div>
        </>
    )
}

export default midBlock