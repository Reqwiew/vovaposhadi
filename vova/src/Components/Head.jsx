import "./ComponentsStyle/HeadStyle.css"
import logo from "./picc/logo.svg"
import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import Button1 from "./Button1.jsx";
import slide1 from "./picc/sl1.png";
import slide2 from "./picc/sl2.png";
import slide3 from "./picc/sl3.png";
import slide4 from "./picc/sl4.png";
import RadialMenu from "./RadialMenu.jsx";
import VerticalButtons from "./listComp.jsx";


function head1() {
    return (
        <>
            <div className="head1">
                <div className="top_head_block">
                    <div className="top_head_block_center">
                        <div className="top_head_block_logo">
                            <img src={logo} alt=""/>
                            <p>healthy ration</p>
                        </div>
                        <div className="top_head_block_content_left">
                            <a href="">Програмы питания</a>
                            <a href="">Бизнес-ланчи</a>
                            <a href="">Gastro Shop</a>
                            <a href="">О нас</a>
                            <a href="">Блог</a>
                        </div>

                    </div>
                    <div className="numbers">
                        <p>+38 (068) 949 - 49 -19</p>
                    </div>

                </div>
                <div className="location">
                    <div className="location_point">
                        <p>RU</p>
                    </div>
                    <div className="location_point">
                        <p>UA</p>
                    </div>
                    <div className="location_point">
                        <p>EN</p>
                    </div>
                </div>



                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={2000}
                    className="swiper1"
                    navigation={{
                        nextEl: '.swiper-button-next1',
                        prevEl: '.swiper-button-prev1',
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination', // Указываем элемент для пагинации
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-bullet"></span>`; // Настройка стилей для буллетов
                        },
                    }}

                >
                    <SwiperSlide className="swiper_sl_1">
                        <div className="swiper_sl_1_content_left">
                            <div className="text_sl1">
                                <h1>Detox программа – <span className="span1">вкусное очищение</span> организма</h1>
                                <h2>8 бутылочек <span className="span1">натуральных</span> смузи и фрешей.</h2>
                            </div>
                            <div className="but_sl2">
                                <Button1 text="Заказать"></Button1>
                                <div className="minisl">
                                    <h3>Пробный день всего:</h3>
                                    <h4>427 грн</h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper_sl_1_content_right">
                            <div className="rectangle_sl_1">
                            <img src={slide1} alt=""/>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="swiper_sl_1">
                        <div className="swiper_sl_1_content_left">
                            <div className="text_sl1">
                                <h1>Detox программа – <span className="span1">вкусное очищение</span> организма</h1>
                                <h2>8 бутылочек <span className="span1">натуральных</span> смузи и фрешей.</h2>
                            </div>
                            <div className="but_sl2">
                                <Button1 text="Заказать"></Button1>
                                <div className="minisl">
                                    <h3>Пробный день всего:</h3>
                                    <h4>427 грн</h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper_sl_1_content_right">
                            <div className="rectangle_sl_1">
                                <img src={slide2} alt=""/>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="swiper_sl_1">
                        <div className="swiper_sl_1_content_left">
                            <div className="text_sl1">
                                <h1>Detox программа – <span className="span1">вкусное очищение</span> организма</h1>
                                <h2>8 бутылочек <span className="span1">натуральных</span> смузи и фрешей.</h2>
                            </div>
                            <div className="but_sl2">
                                <Button1 text="Заказать"></Button1>
                                <div className="minisl">
                                    <h3>Пробный день всего:</h3>
                                    <h4>427 грн</h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper_sl_1_content_right">
                            <div className="rectangle_sl_1">
                                <img src={slide3} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper_sl_1">
                        <div className="swiper_sl_1_content_left">
                            <div className="text_sl1">
                                <h1>Detox программа – <span className="span1">вкусное очищение</span> организма</h1>
                                <h2>8 бутылочек <span className="span1">натуральных</span> смузи и фрешей.</h2>
                            </div>
                            <div className="but_sl2">
                                <Button1 text="Заказать"></Button1>
                                <div className="minisl">
                                    <h3>Пробный день всего:</h3>
                                    <h4>427 грн</h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper_sl_1_content_right">
                            <div className="rectangle_sl_1">
                                <img src={slide4} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="custom-pagination"></div>
                </Swiper>


            </div>
            <VerticalButtons/>
            <RadialMenu/>
        </>
    )

}

export default head1