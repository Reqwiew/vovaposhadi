import "./ComponentsStyle/FooterssStyle.css"
import logo from "./picc/logo.svg"
import hz1 from "./picc/hz1.svg"
import hz2 from "./picc/hz2.svg"
import hz3 from "./picc/hz3.svg"
import hz4 from "./picc/hz4.svg"

function Footerss() {
    return (
        <>
            <div className="footerss">
                <div className="main_footerss">
                    <div className="left_block">
                        <p>Програмы питания</p>
                        <p>О нас</p>
                        <p>Бизнес-ланчи</p>
                        <p>Gastro Shop</p>
                        <p>Блог</p>
                    </div>
                    <div className="mid_block">
                        <img src={logo} alt=""/>
                        <p>сервис здорового питания</p>
                    </div>
                    <div className="right_block">
                        <p>Условия</p>
                        <p>Сотрудничества</p>
                        <p>FAQ</p>
                        <div className="right_block_social">
                            <img src={hz1} alt=""/>
                            <img src={hz2} alt=""/>
                            <img src={hz3} alt=""/>
                            <img src={hz4} alt=""/>
                        </div>
                        <p><span className="span1">+38 (068) 949 - 49 - 19</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footerss;