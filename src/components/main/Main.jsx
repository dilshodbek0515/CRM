import "./Main.css";
import main_img from "../../assets/image/icon img.png"
import { Link } from "react-router-dom"
const Main = ({ language,darkmood }) => {
  return (
    <div className="main_content">
      <div className="Main">
        <Link to="/oquvchilar" className="main_card">
          <div className="main_card_text_content">
            <p className="main_card_text1">
              {
                language === "UZ" ? "Jami o’quvchilar soni:" : "Total number of students:"
              }
            </p>
            <p className="main_card_text2">
              {
                language === "UZ" ? "255 ta" : "255 ta"
              }
            </p>
          </div>
          <img className="main_card_img" src={main_img} alt="img" />
        </Link>
        <Link to="/murojatlar" className="main_card">
          <div className="main_card_text_content">
            <p className="main_card_text1">
              {
                language === "UZ" ? "O’qituvchilar soni:" : "Number of teachers:"
              }
            </p>
            <p className="main_card_text2">
              {
                language === "UZ" ? "10 ta" : "10 ta"
              }
            </p>
          </div>
          <img className="main_card_img" src={main_img} alt="img" />
        </Link>
        <Link to="/oquvchilar" className="main_card">
          <div className="main_card_text_content">
            <p className="main_card_text1">
              {
                language === "UZ" ? "Shu oy tark etganlar" : "Those who left this month"
              }
            </p>
            <p className="main_card_text2">
              {
                language === "UZ" ? "60 ta" : "60 ta"
              }
            </p>
          </div>
          <img className="main_card_img" src={main_img} alt="img" />
        </Link>
        <Link to="/murojatlar" className="main_card">
          <div className="main_card_text_content">
            <p className="main_card_text1">
              {
                language === "UZ" ? "Jami guruhlar soni" : "Total number of groups"
              }
            </p>
            <p className="main_card_text2">
              {
                language === "UZ" ? "20 ta" : "20 ta"
              }
            </p>
          </div>
          <img className="main_card_img" src={main_img} alt="img" />
        </Link>
      </div>
    </div>

  )
};

export default Main;