import "./Payments.css"

const Payments = ({ language }) => {
    return (
        <div className="pupil_div">
            <div className="New_pupil">
                <p className="pupil_new_text">
                    {
                        language === "UZ" ? "To’lov qilish" : "Payment"
                    }
                </p>
                <form className="pupil_form">
                    <div className="new_pupil_input_div">
                        <div className="new_pupil_child_one">
                            <p className="new_pupil_input_text">O’quvchi ismi</p>
                            <input className="pupil_input" type="text" placeholder="Muxamadaliyev Ibroxim" required maxLength={20} minLength={3} />
                        </div>
                        <div className="new_pupil_child_two">
                            <p className="new_pupil_input_text">
                                {
                                    language === "UZ" ? "O’qituvchi ismi" : "Teacher's name"
                                }
                            </p>
                            <input className="pupil_input" type="text" placeholder="Nargiza Olimjonova " required maxLength={30} minLength={20} />
                        </div>
                    </div>
                    <div className="new_pupil_input_div">
                        <div className="new_pupil_child_one">
                            <p className="new_pupil_input_text">
                                {
                                    language === "UZ" ? "Yo’nalish" : "Direction"
                                }
                            </p>
                            <select className="pupil_select">
                                <option className="pupil_option">
                                    {
                                        language === "UZ" ? "Ona-tili" : "Mother tongue"
                                    }
                                </option>
                                <option className="pupil_option">
                                    {
                                        language === "UZ" ? "Matematika" : "Mathematics"
                                    }
                                </option>
                                <option className="pupil_option">
                                    {
                                        language === "UZ" ? "Informatika" : "Informatics"
                                    }
                                </option>
                                <option className="pupil_option">
                                    {
                                        language === "UZ" ? "Ona-tili" : "Mother tongue"
                                    }
                                </option>
                                <option className="pupil_option">
                                    {
                                        language === "UZ" ? "Matematika" : "Mathematics"
                                    }
                                </option>
                                <option className="pupil_option">
                                    {
                                        language === "UZ" ? "Informatika" : "Informatics"
                                    }
                                </option>
                            </select>
                        </div>

                        <div className="new_pupil_child_two">
                            <p className="new_pupil_input_text">
                                {
                                    language === "UZ" ? "To’lov qilayotgan kun" : "Payment day"
                                }
                            </p>
                            <input className="pupil_input" type="date" required maxLength={20} minLength={8} />
                        </div>
                    </div>
                    <div className="new_pupil_input_div">
                        <div className="new_pupil_child_one">
                            <p className="new_pupil_input_text">
                                {
                                    language === "UZ" ? "Telefon raqam" : "Phone number"
                                }
                            </p>
                            <input className="pupil_input" type="number" placeholder="+998 xx xxx xx xx" required maxLength={15} minLength={13} />
                        </div>
                        <button className="pupil_btns">
                            {
                                language === "UZ" ? "To’lov qilish" : "Payment"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payments