import "./Checked5_table.css"
import exitimg2 from "../../../assets/image/exit img 2.png"
import { useState } from "react";

const Checked_table5 = ({ language }) => {
    const [date, setDate] = useState(new Date());
    const [checkedState, setCheckedState] = useState(new Array(20).fill(false));
    const [isMasterChecked, setIsMasterChecked] = useState(false);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const students = [
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim",
        "Muxamadaliyev Ibroxim"
    ];

    const handleMasterCheckboxChange = () => {
        setIsMasterChecked(!isMasterChecked);
        setCheckedState(new Array(students.length).fill(!isMasterChecked));
    };

    const handleCheckboxChange = (index) => {
        const updatedCheckedState = checkedState.map((item, pos) =>
            pos === index ? !item : item
        );
        setCheckedState(updatedCheckedState);
        setIsMasterChecked(updatedCheckedState.every(Boolean));
    };
    return (
        <div className="informatika_divs">
            <div className='Informatika_tabless'>
                <p className="informatika_one_text">
                    {
                        language === "UZ" ? "Kimyo guruhi ro'yxati" : "Chemical group list"
                    }
                </p>
                <div className="informatika_bottom_contents">
                    <div className="informatika_left_divs">
                        <div className="exist_card">
                            <div className="exist_card_top_content">
                                {
                                    language === "UZ" ? "Kimyo" : "Chemical"
                                }
                            </div>
                            <div className="exist_top_div">
                                <img className="exist_img" src={exitimg2} alt="exist_img" />
                                <div className="exist_top_img_div">
                                    <p className="exist_top_text1">
                                        <span className="sxist_span">
                                            {language === "UZ" ? "O’qituvchi:" : "Teacher:"
                                            } </span>
                                        Muxamadaliyev Ibrohim
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
                        <div className="header_datas">
                            <p>{day}</p>
                            <p>.0{month}</p>
                            <p>.{year}</p>
                        </div>
                        <p className="informatika_left_divs_text12">
                            {
                                language === "UZ" ? "Darsga kelmaganlar" : "Those who did not come to class"
                            }
                        </p>
                        <p className="informatika_left_divs_text2">
                            {
                                language === "UZ" ? "1.Sheraliyev Sardor" : "1.Sardor Sheraliyev"
                            }
                        </p>
                        <p className="informatika_left_divs_text2">
                            {
                                language === "UZ" ? "2.Nematov Jurabek" : "2.Jurabek Nematov "
                            }
                        </p>
                        <p className="informatika_left_divs_text2">
                            {
                                language === "UZ" ? "3.Alimov Javohir" : "3.Javohir Alimov "
                            }
                        </p>
                    </div>

                    <div className="informatika_right_divs">
                        <div className="informatika_right_cards1">
                            <p className="informatika_right_cards_text11">№</p>
                            <p className="informatika_right_cards_text22">
                                {
                                    language === "UZ" ? "O’quvchi ismi" : "Name of the student"
                                }
                            </p>
                            <p className="informatika_right_cards_text3">
                                {
                                    language === "UZ" ? "Davomat" : "Attendance"
                                }
                            </p>
                            <input
                                className="informatika_checked"
                                type="checkbox"
                                checked={isMasterChecked}
                                onChange={handleMasterCheckboxChange}
                            />
                        </div>
                        {students.map((student, index) => (
                            <div className="informatika_right_cards" key={index}>
                                <p className="informatika_right_cards_text1">{index + 1}</p>
                                <p className="informatika_right_cards_text2">{student}</p>
                                <input
                                    className="informatika_checkbox"
                                    type="checkbox"
                                    checked={checkedState[index]}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button className="Saqlash_btn">
                    {
                        language === "UZ" ? "Saqlash" : "Save"
                    }
                </button>
            </div>
        </div>
    );
};

export default Checked_table5;
