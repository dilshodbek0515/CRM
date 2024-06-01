import "./New_pupil.css";
import { MdOutlineSaveAlt } from "react-icons/md";

const New_pupil = ({ language }) => {
    return (
        <div className="pupil_div">
            <div className="New_pupil">
                <p className="pupil_new_text">
                    {language === "UZ" ? "Yangi o’quvchi qo’shish" : "Add a new student"}
                </p>
                <form className="pupil_form">
                    <div className="new_pupil_input_div">
                        <div className="new_pupil_child_one">
                            <p className="new_pupil_input_text">
                                {language === "UZ" ? "O’quvchi ismi" : "Student Name"}
                            </p>
                            <input
                                className="pupil_input"
                                type="text"
                                placeholder={language === "UZ" ? "Muxamadaliyev Ibroxim" : "John Doe"}
                                required
                                maxLength={20}
                                minLength={3}
                            />
                        </div>
                        <div className="new_pupil_child_two">
                            <p className="new_pupil_input_text">
                                {language === "UZ" ? "Ota-onasi ismi" : "Parent's Name"}
                            </p>
                            <input
                                className="pupil_input"
                                type="text"
                                placeholder={language === "UZ" ? "Ota-onasi ismi" : "Parent's Name"}
                                required
                                maxLength={30}
                                minLength={20}
                            />
                        </div>
                    </div>
                    <div className="new_pupil_input_div">
                        <div className="new_pupil_child_one">
                            <p className="new_pupil_input_text">
                                {language === "UZ" ? "Telefon raqam" : "Phone Number"}
                            </p>
                            <input
                                className="pupil_input"
                                type="number"
                                placeholder="+998900113861"
                                required
                                maxLength={15}
                                minLength={13}
                            />
                        </div>
                        <div className="new_pupil_child_two">
                            <p className="new_pupil_input_text">
                                {language === "UZ" ? "Ota onasi nomeri" : "Parent's Phone Number"}
                            </p>
                            <input
                                className="pupil_input"
                                type="number"
                                placeholder="+998900113861"
                                required
                                maxLength={15}
                                minLength={13}
                            />
                        </div>
                    </div>
                    <div className="new_pupil_input_div">
                        <div className="new_pupil_child_one">
                            <p className="new_pupil_input_text">
                                {language === "UZ" ? "Yo’nalish" : "Direction"}
                            </p>
                            <select className="pupil_select">
                                <option className="pupil_option">
                                    {language === "UZ" ? "Ona-tili" : "Native Language"}
                                </option>
                                <option className="pupil_option">
                                    {language === "UZ" ? "Matematika" : "Mathematics"}
                                </option>
                                <option className="pupil_option">
                                    {language === "UZ" ? "Informatika" : "Informatics"}
                                </option>
                                <option className="pupil_option">
                                    {language === "UZ" ? "Ona-tili" : "Native Language"}
                                </option>
                                <option className="pupil_option">
                                    {language === "UZ" ? "Matematika" : "Mathematics"}
                                </option>
                                <option className="pupil_option">
                                    {language === "UZ" ? "Informatika" : "Informatics"}
                                </option>
                            </select>
                        </div>
                        <div className="new_pupil_child_two">
                            <p className="new_pupil_input_text">
                                {language === "UZ" ? "Rasm 3x4" : "Photo 3x4"}
                            </p>
                            <label className="custom-file-upload">
                                {language === "UZ" ? "Yuklash" : "Upload"}
                                <MdOutlineSaveAlt className="save" />
                                <input className="file_input" type="file" required />
                            </label>
                        </div>
                        <button className="pupil_btn">
                            {language === "UZ" ? "Qo'shish" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default New_pupil;
