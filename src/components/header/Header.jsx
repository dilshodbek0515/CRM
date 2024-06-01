import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { useState } from "react";
import { GoBell } from "react-icons/go";
const Header = ({ setSidebar, sidebar, setDarkmood, darkmood, value, language, setLanguage }) => {

  const [date, setDate] = useState(new Date());
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  function kunFunc() {
    localStorage.setItem("mood", "tun");
    setDarkmood(true);
  }
  function tunFunc() {
    localStorage.setItem("mood", "kun");
    setDarkmood(false);
  }
  return (
    <header header className="header" >
      <div className="header_left_content">
        {!sidebar ? (
          <IoMenu
            className="header_menu_icons"
            onClick={() => setSidebar(true)}
          />
        ) : null}
        <h2 to="/" className="header_title">
          {
            value
          }

        </h2>
      </div>
      <div className="header_data">
        <p> {day}</p>
        <p>.0{month}</p>
        <p>.{year}</p>
      </div>
      <div className="header_right">
        <div className="header_right_content">
          <p className="header_language_value">
            {language}
            <IoIosArrowDown className="header_language_arrow_icons" />
          </p>
          <div className="header_select_value">
            <p
              onClick={() => setLanguage("UZ")}
              className="header_language_select_text"
            >
              UZ
            </p>
            <p
              onClick={() => setLanguage("ENG")}
              className="header_language_select_text"
            >
              ENG
            </p>
          </div>
        </div>
        <div className="dark_mood">
          {darkmood ? (
            <FaRegMoon className="kun_tun" onClick={() => tunFunc()} />
          ) : (
            <IoSunny className="kun_tun" onClick={() => kunFunc()} />
          )}
        </div>
        <div className="shop">
          <GoBell className="bell" />
          <p className="red"></p>
        </div>
      </div>

    </header >
  );
};

export default Header;