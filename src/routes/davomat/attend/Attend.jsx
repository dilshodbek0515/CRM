import "./Attend.css"
import { Link } from "react-router-dom"
import { GrSearch } from "react-icons/gr"
import exitimg from "../../../assets/image/exit img.png"
import exitimg1 from "../../../assets/image/exit img 1.png"
import exitimg2 from "../../../assets/image/exit img 2.png"

const Attend = ({ language }) => {
    return (
        <div className="exist_contentt">
            <div className="Exist_group">
                <div className="exist_content_top">
                    <p className="exist_content_top_text">
                        {
                            language === "UZ" ? "Davomat olinadigan guruhni tanlang" : "Select the group to attend"
                        }
                    </p>
                    <form className="exist_form">
                        <button className="exist_btn"><GrSearch /></button>
                        <input className="exist_search_input" type="search" placeholder={language === "UZ" ? "Guruh nomini kiriting" : "Enter a group name"} required />
                    </form>
                </div>

                <div className="exist_bottomm">
                    <Link to="/checked" className="exist_card">
                        <div className="exist_card_top_content">
                            {
                                language === "UZ" ? "Matematika" : "Mathematics"
                            }
                        </div>
                        <div className="exist_card_bottom_content">
                            <div className="exist_top_div">
                                <img className="exist_img" src={exitimg} alt="exist_img" />
                                <div className="exist_top_img_div">
                                    <p className="exist_top_text1">
                                        <span className="sxist_span">
                                            {language === "UZ" ? "O’qituvchi:" : "Teacher:"
                                            } </span>
                                        Muxamadaliyev Ibroxim
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
                    </Link>

                    <Link to="/checked2" className="exist_card">
                        <div className="exist_card_top_content">
                            {
                                language === "UZ" ? "Ona tili" : "Mother tongue"
                            }
                        </div>
                        <div className="exist_card_bottom_content">
                            <div className="exist_top_div">
                                <img className="exist_img" src={exitimg1} alt="exist_img" />
                                <div className="exist_top_img_div">
                                    <p className="exist_top_text1r">
                                        <span className="sxist_span">
                                            {
                                                language === "UZ" ? "O’qituvchi:" : "Teacher:"
                                            }
                                        </span>Olimjonova Nargiza</p>
                                    <p className="exist_top_text2">
                                        <span className="sxist_span">
                                            {
                                                language === "UZ" ? "Tell raqam:" : "Tell number:"
                                            }
                                        </span>+998900113861</p>
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
                                    </span>11:00-13:00</p>
                                <p className="exist_bottom_div_texts3">
                                    <span className="sxist_span3">
                                        {
                                            language === "UZ" ? "O’quvchilar soni" : "Number students"
                                        }
                                    </span>25ta</p>
                                <p className="exist_bottom_div_texts4">
                                    <span className="sxist_span4">
                                        {
                                            language === "UZ" ? "To’lov qilganlar" : "Those who paid"
                                        }
                                    </span>10ta</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/checked3" className="exist_card">
                        <div className="exist_card_top_content">
                            {
                                language === "UZ" ? "Informatika" : "Informatics"
                            }
                        </div>
                        <div className="exist_card_bottom_content">
                            <div className="exist_top_div">
                                <img className="exist_img" src={exitimg2} alt="exist_img" />
                                <div className="exist_top_img_div">
                                    <p className="exist_top_text1">
                                        <span className="sxist_span">
                                            {
                                                language === "UZ" ? "O’qituvchi:" : "Teacher:"
                                            }
                                        </span>Muxamadaliyev Ibroxim</p>
                                    <p className="exist_top_text2">
                                        <span className="sxist_span">
                                            {
                                                language === "UZ" ? "Tell raqam:" : "Tell number:"
                                            }
                                        </span>+998900113861</p>
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
                                    </span>25ta</p>
                                <p className="exist_bottom_div_texts4">
                                    <span className="sxist_span4">
                                        {
                                            language === "UZ" ? "To’lov qilganlar" : "Those who paid"
                                        }
                                    </span>10ta</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/checked4" className="exist_card">
                        <div className="exist_card_top_content">Fizika</div>
                        <div className="exist_card_bottom_content">
                            <div className="exist_top_div">
                                <img className="exist_img" src={exitimg} alt="exist_img" />
                                <div className="exist_top_img_div">
                                    <p className="exist_top_text1">
                                        <span className="sxist_span">
                                            {
                                                language === "UZ" ? "O'qituvchi:" : "Teacher:"
                                            }
                                        </span>Muxamadaliyev Ibroxim</p>
                                    <p className="exist_top_text2">
                                        <span className="sxist_span">
                                            {
                                                language === "UZ" ? "Tell raqam:" : "Tell number:"
                                            }
                                        </span>+998900113861</p>
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
                                    </span>25ta</p>
                                <p className="exist_bottom_div_texts4">
                                    <span className="sxist_span4">
                                        {
                                            language === "UZ" ? "To’lov qilganlar" : "Those who paid"
                                        }
                                    </span>10ta</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/checked5" className="exist_card">
                        <div className="exist_card_top_content">
                            {
                                language === "UZ" ? "Kimyo" : "Chemistry"
                            }
                        </div>
                        <div className="exist_card_bottom_content">
                            <div className="exist_top_div">
                                <img className="exist_img" src={exitimg1} alt="exist_img" />
                                <div className="exist_top_img_div">
                                    <p className="exist_top_text1r">
                                        <span className="sxist_span">
                                            {
                                                language === "UZ" ? "O'qituvchi:" : "Teacher:"
                                            }
                                        </span>Olimjonova Nargiza</p>
                                    <p className="exist_top_text2">
                                        <span className="sxist_span">
                                            {
                                                language === "UZ" ? "Tell raqam:" : "Tell number:"
                                            }
                                        </span>+998900113861</p>
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
                                    </span>11:00-13:00</p>
                                <p className="exist_bottom_div_texts3">
                                    <span className="sxist_span3">
                                        {
                                            language === "UZ" ? "O’quvchilar soni" : "Number students"
                                        }
                                    </span>25ta</p>
                                <p className="exist_bottom_div_texts4">
                                    <span className="sxist_span4">
                                        {
                                            language === "UZ" ? "To’lov qilganlar" : "Those who paid"
                                        }
                                    </span>10ta</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/checked6" className="exist_card">
                        <div className="exist_card_top_content">Tarix</div>
                        <div className="exist_card_bottom_content">
                            <div className="exist_top_div">
                                <img className="exist_img" src={exitimg2} alt="exist_img" />
                                <div className="exist_top_img_div">
                                    <p className="exist_top_text1">
                                        <span className="sxist_span">
                                            {
                                                language === "UZ" ? "O'qituvchi:" : "Teacher:"
                                            }
                                        </span>Muxamadaliyev Ibroxim</p>
                                    <p className="exist_top_text2">
                                        <span className="sxist_span">
                                            {
                                                language === "UZ" ? "Tell raqam:" : "Tell number:"
                                            }
                                        </span>+998900113861</p>
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
                                    </span>25ta</p>
                                <p className="exist_bottom_div_texts4">
                                    <span className="sxist_span4">
                                        {
                                            language === "UZ" ? "To’lov qilganlar" : "Those who paid"
                                        }
                                    </span>10ta</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Attend