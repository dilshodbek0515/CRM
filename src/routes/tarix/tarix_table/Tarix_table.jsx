import "./Tarix_table.css"
import exitimg2 from "../../../assets/image/exit img 2.png"

const Tarix_table = ({ language }) => {
    return (
        <div className="informatika_divs">
            <div className='Informatika_table'>
                <p className="informatika_one_text">
                    {
                        language === "UZ" ? "Tarix guruhi ro’yhati" : "History group list"
                    }
                </p>
                <div className="informatika_bottom_contents">
                    <div className="informatika_left_divs">
                        <div className="exist_card">
                            <div className="exist_card_top_content">
                                {
                                    language === "UZ" ? "Tarix" : "History"
                                }
                            </div>
                            <div className="exist_top_div">
                                <img className="exist_img" src={exitimg2} alt="exist_img" />
                                <div className="exist_top_img_div">
                                    <p className="exist_top_text1">
                                        <span className="sxist_span">
                                            {language === "UZ" ? "O’qituvchi:" : "Teacher:"
                                            } </span>
                                        Olimjonova Nargiza
                                    </p>
                                    <p className="exist_top_text2">
                                        <span className="sxist_span">{
                                            language === "UZ" ? "Tell raqam:" : "Tell number:"
                                        } </span>
                                        {
                                            language === "UZ" ? "+998900113861" : "+998900113861"
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="exist_bottom_div">
                                <p className="exist_bottom_div_texts1">
                                    <span className="sxist_span1">
                                        {
                                            language === "UZ" ? "Dars kunlari:" : "Class days:"
                                        }
                                    </span>
                                    {
                                        language === "UZ" ? "DU-CHO-JUMA" : "MON-WEND-SUN"
                                    }
                                </p>
                                <p className="exist_bottom_div_texts2">
                                    <span className="sxist_span2">
                                        {
                                            language === "UZ" ? "Dars vaqti:" : "Class time:"
                                        }
                                    </span>14:00-16:00</p>

                                <p className="exist_bottom_div_texts3">
                                    <span className="sxist_span3">
                                        {
                                            language === "UZ" ? "O’quvchilar soni" : "Number students"
                                        }
                                    </span>20ta</p>
                                <p className="exist_bottom_div_texts4">
                                    <span className="sxist_span4">
                                        {
                                            language === "UZ" ? "To’lov qilganlar" : "Those who paid"
                                        }
                                    </span>10ta</p>
                            </div>
                        </div>
                        <p className="informatika_left_divs_text1">
                            {
                                language === "UZ" ? "Shu oy bo’yicha to’lov qilmaganlar" : "They did not pay for this month"
                            }
                        </p>
                        <p className="informatika_left_divs_text2">
                            {
                                language === "UZ" ? "1.Ziyodullayev Muhammadali" : "1. Muhammadali Ziyodullayev"
                            }
                        </p>
                        <p className="informatika_left_divs_text2">
                            {
                                language === "UZ" ? "2.Jamilov Navruzbek" : "2.Navruzbek Jamilov "
                            }
                        </p>
                        <p className="informatika_left_divs_text2">
                            {
                                language === "UZ" ? "3.Jovburiyev Bexruz" : "3. Bexruz Jovburiyev "
                            }
                        </p>
                    </div>

                    <div className="informatika_right_divs">
                        <div className="informatika_right_cards1">
                            <p className="informatika_right_cards_text11">№</p>
                            <p className="informatika_right_cards_text22">{language === "UZ" ? "O’quvchi ismi" : "Name of the student"}</p>
                            <p className="informatika_right_cards_text3">{language === "UZ" ? "To’lov" : "Payment"}</p>
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">1</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkbox" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">2</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkbox" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">3</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkbox" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">4</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkbox" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">5</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkbox" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">6</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkbox" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">7</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkbox" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">8</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkbox" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">9</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkbox" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">10</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">11</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">12</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">13</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">14</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">15</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">16</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">17</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">18</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">19</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                        <div className="informatika_right_cards">
                            <p className="informatika_right_cards_text1">20</p>
                            <p className="informatika_right_cards_text2">
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibroxim Muxamadaliyev "
                                }
                            </p>
                            <input className="informatika_checkboxx" type="checkbox" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarix_table