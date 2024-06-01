import "./Murojat_table_two.css"
import { useState } from "react";
import { FiTrash } from "react-icons/fi";

const Murojat_table_two = ({ language }) => {
    const [date, setDate] = useState(new Date());
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return (
        <div className="Murojat_table_one_contentt">
            <div className="Murojat_table_one">
                <div className="dfghjmbj">
                    <div className="header_dataa">
                        <p> {day}</p>
                        <p>.0{month}</p>
                        <p>.{year}</p>
                    </div>
                    <p className="Murojat_table_one_text">kungi murojatlar</p>
                </div>
                <div className="murojat_table1">
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
                                language === "UZ" ? "Izoh" : "Explanation"
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
                        <p className="our_cards_textscc">
                            {
                                language === "UZ"
                                    ?
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. "
                                    :
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed."
                            }
                        </p>
                        <FiTrash className="our_trash" />
                    </div>
                    <div className="our_pupil_content_cards3">
                        <p className="our_cards_texts">2</p>
                        <p className="our_cards_texts">
                            {
                                language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibrahim Mukhamadaliyev"
                            }
                        </p>
                        <p className="our_cards_texts">+998900113861</p>
                        <p className="our_cards_textscc">
                            {
                                language === "UZ"
                                    ?
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. "
                                    :
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed."
                            }
                        </p>
                        <FiTrash className="our_trash" />
                    </div>
                    <div className="our_pupil_content_cards2">
                        <p className="our_cards_texts">3</p>
                        <p className="our_cards_texts">
                            {
                                language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibrahim Mukhamadaliyev"
                            }
                        </p>
                        <p className="our_cards_texts">+998900113861</p>
                        <p className="our_cards_textscc">
                            {
                                language === "UZ"
                                    ?
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. "
                                    :
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed."
                            }
                        </p>
                        <FiTrash className="our_trash" />
                    </div>

                    <div className="our_pupil_content_cards3">
                        <p className="our_cards_texts">4</p>
                        <p className="our_cards_texts">
                            {
                                language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibrahim Mukhamadaliyev"
                            }
                        </p>
                        <p className="our_cards_texts">+998900113861</p>
                        <p className="our_cards_textscc">
                            {
                                language === "UZ"
                                    ?
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. "
                                    :
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed."
                            }
                        </p>
                        <FiTrash className="our_trash" />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Murojat_table_two;