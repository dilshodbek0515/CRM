import "./New_group.css"
import { MdOutlineSaveAlt } from "react-icons/md";

const New_group = ({ language }) => {
    return (
        <div className="group_div">
            <div className="New_group">
                <p className="group_new_text">
                    {language === "UZ" ? "Yangi guruh qo’shish" : "Add a new group"}
                </p>
                <form className="group_form">
                    <div className="new_group_input_div">
                        <div className="new_group_child_one">
                            <p className="new_group_input_text">
                                {language === "UZ" ? "Guruh yo’nalishi" : "Group direction"}
                            </p>
                            <select className="group_select" name="groupDirection">
                                <option className="group_option">
                                    {language === "UZ" ? "Matematika" : "Mathematics"}
                                </option>
                                <option className="group_option">
                                    {language === "UZ" ? "Ona-tili" : "Native Language"}
                                </option>
                                <option className="group_option">
                                    {language === "UZ" ? "Informatika" : "Computer Science"}
                                </option>
                            </select>
                        </div>
                        <div className="new_group_child_two">
                            <p className="new_group_input_text">
                                {language === "UZ" ? "O’qituvchi" : "Teacher"}
                            </p>
                            <input className="group_input" type="text" placeholder=
                                {
                                    language === "UZ" ? "Muxamadaliyev Ibroxim" : "Ibrahim Mukhamadaliyev"
                                }
                                required maxLength={30} minLength={20} />
                        </div>
                    </div>
                    <div className="new_group_input_div">
                        <div className="new_group_child_one">
                            <p className="new_group_input_text">
                                {language === "UZ" ? "Dars kunlari" : "Class days"}
                            </p>
                            <input className="group_input" type="text" placeholder={language === "UZ" ? "DU-CHOR-JUMA" : "MON-WED-FRI"} required maxLength={15} minLength={13} />
                        </div>
                        <div className="new_group_child_two">
                            <p className="new_group_input_text">
                                {language === "UZ" ? "O’qituvchi tel nomeri" : "Teacher phone number"}
                            </p>
                            <input className="group_input" type="tel" placeholder="+998 xx xxx xx xx" required maxLength={15} minLength={13} />
                        </div>
                    </div>
                    <div className="new_group_input_div">
                        <div className="new_group_child_one">
                            <p className="new_group_input_text">
                                {language === "UZ" ? "Dars vaqti" : "Class time"}
                            </p>
                            <select className="group_select" name="classTime">
                                <option className="group_option">14:00-16:00</option>
                                <option className="group_option">14:00-17:00</option>
                                <option className="group_option">14:00-18:00</option>
                                <option className="group_option">14:00-19:00</option>
                                <option className="group_option">14:00-20:00</option>
                                <option className="group_option">14:00-21:00</option>
                            </select>
                        </div>
                        <div className="new_group_child_two">
                            <p className="new_group_input_text">
                                {language === "UZ" ? "O’qituvchi rasmi (3x4)" : "Teacher photo (3x4)"}
                            </p>
                            <label className="custom-file-upload">
                                {language === "UZ" ? "Yuklash" : "Upload"}
                                <MdOutlineSaveAlt className="save" />
                                <input className="file_input" type="file" required />
                            </label>
                        </div>
                        <button className="group_btn">
                            {language === "UZ" ? "Qo'shish" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default New_group;
