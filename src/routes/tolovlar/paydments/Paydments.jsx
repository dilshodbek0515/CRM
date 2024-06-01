import "./Paydments.css"
import { GrSearch } from "react-icons/gr";
import { BsCheckAll } from "react-icons/bs";

const Paydments = ({ language }) => {
    return (
        <div className="our_pupil_div">
            <div className="Our_pupil">
                <div className="our_pupil_div">
                    <div className="Our_pupil">
                        <div className="our_pupil_content_top">
                            <p className="our_pupil_content_top_text">
                                {
                                    language === "UZ" ? "To’lov qilganlar (shu oy bo’yicha) " : "Payers (for this month)"
                                }
                            </p>
                            <form className="our_form">
                                <button className="our_btn"><GrSearch /></button>
                                <input className="our_search_input" type="search" required />
                            </form>
                        </div>

                        <div className="our_pupil_content_center">
                            <div className="our_pupil_content_cards1">
                                <p className="our_cards_texts_one">№</p>
                                <p className="our_cards_texts_ones">
                                    {
                                        language === "UZ" ? "O’quvchi ismi" : "Name of the student"
                                    }
                                </p>
                                <p className="our_cards_texts_oness">
                                    {
                                        language === "UZ" ? "Telefon nomer" : "Phone number"
                                    }
                                </p>
                                <p className="our_cards_texts_onesss">
                                    {
                                        language === "UZ" ? "Yo’nalish" : "Direction"
                                    }
                                </p>
                                <p className="our_cards_texts_onees">
                                    {
                                        language === "UZ" ? "Ota-ona(F.I.SH)" : "Parent(F.I.SH)"
                                    }
                                </p>
                                <p className="our_cards_texts_one">
                                    {
                                        language === "UZ" ? "Ota-ona (Tel)" : "Parent (Tel)"
                                    }
                                </p>
                            </div>
                            <div className="our_pupil_content_cards2">
                                <p className="our_cards_texts">1</p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibrahim Mukhamadaliyev"
                                    }
                                </p>
                                <p className="our_cards_texts">+998900113861</p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Matematika" : "Mathematics"
                                    }
                                </p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Ota-ona(F.I.SH)" : "Parent(F.I.SH)"
                                    }
                                </p>
                                <p className="our_cards_texts">+998900113861</p>
                                <BsCheckAll className="payd_check" />
                            </div>
                            <div className="our_pupil_content_cards3">
                                <p className="our_cards_texts">2</p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibrahim Mukhamadaliyev"
                                    }
                                </p>
                                <p className="our_cards_texts">+998900113861</p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Matematika" : "Mathematics"
                                    }
                                </p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Ota-ona(F.I.SH)" : "Parent(F.I.SH)"
                                    }
                                </p>
                                <p className="our_cards_texts">+998900113861</p>
                                <BsCheckAll className="payd_check" />
                            </div>
                            <div className="our_pupil_content_cards2">
                                <p className="our_cards_texts">3</p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibrahim Mukhamadaliyev"
                                    }
                                </p>
                                <p className="our_cards_texts">+998900113861</p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Matematika" : "Mathematics"
                                    }
                                </p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Ota-ona(F.I.SH)" : "Parent(F.I.SH)"
                                    }
                                </p>
                                <p className="our_cards_texts">+998900113861</p>
                                <BsCheckAll className="payd_check" />
                            </div>
                            <div className="our_pupil_content_cards3">
                                <p className="our_cards_texts">4</p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibrahim Mukhamadaliyev"
                                    }
                                </p>
                                <p className="our_cards_texts">+998900113861</p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Matematika" : "Mathematics"
                                    }
                                </p>
                                <p className="our_cards_texts">
                                    {
                                        language === "UZ" ? "Ota-ona(F.I.SH)" : "Parent(F.I.SH)"
                                    }
                                </p>
                                <p className="our_cards_texts">+998900113861</p>
                                <BsCheckAll className="payd_check" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paydments