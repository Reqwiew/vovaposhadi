import "./ComponentsStyle/PhotoBludStyle.css"
import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import 'swiper/swiper-bundle.css';
import s1 from "./picc/s1.png"
import s2 from "./picc/s2.png"
import s3 from "./picc/s3.png"
import s4 from "./picc/s4.png"
import s5 from "./picc/s5.png"
import s6 from "./picc/s6.png"
import elip1 from "./picc/Ellipse2.png"
import elip2 from "./picc/Ellipse3.png"
import elip3 from "./picc/Ellipse4.png"
import elip4 from "./picc/Ellipse5.png"
import elip5 from "./picc/elips.svg"


function PhotobLud() {
    return (
        <>
            <div className="title_sl">
                <h1>Наши блюда</h1>
            </div>
            <Swiper
                className="swiper22"
                spaceBetween={10}
                modules={[Pagination, Autoplay]}// Расстояние между слайдами
                slidesPerView={5}    // Сколько слайдов показывается одновременно
                loop={true}          // Бесконечный цикл
                autoplay={{          // Автоматическая прокрутка
                    delay: 1000,       // Задержка перед переключением слайда (3 секунды)
                    disableOnInteraction: false,  // Не останавливать автопрокрутку при взаимодействии
                }}
                grabCursor={true}    // Курсор «передергивания» при перетаскивании
            >
                {/* Ваши слайды */}
                <SwiperSlide><img src={s1} alt="Image 1"/></SwiperSlide>
                <SwiperSlide><img src={s2} alt="Image 2"/></SwiperSlide>
                <SwiperSlide><img src={s3} alt="Image 3"/></SwiperSlide>
                <SwiperSlide><img src={s4} alt="Image 1"/></SwiperSlide>
                <SwiperSlide><img src={s5} alt="Image 2"/></SwiperSlide>
                <SwiperSlide><img src={s6} alt="Image 3"/></SwiperSlide>
                {/* Добавьте столько слайдов, сколько нужно */}
            </Swiper>

            <img className="elip11" src={elip1} alt=""/>
            <img className="elip12" src={elip2} alt=""/>
            <img className="elip13" src={elip3} alt=""/>
            <img className="elip14" src={elip4} alt=""/>
            <img className="elip15" src={elip5} alt=""/>
        </>
    )
}

export default PhotobLud