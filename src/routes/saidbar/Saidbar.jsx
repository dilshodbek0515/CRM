import "./Saidbar.css";
import { Link } from "react-router-dom";
import { BiSolidContact } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FaUsers } from "react-icons/fa6";
import saidbar_img from "../../assets/image/saidbar img.png";
import saidbar_img2 from "../../assets/image/saidbar img 1.png";
import saidbar_img3 from "../../assets/image/saidbar img 2.png";
import saidbar_img4 from "../../assets/image/saidbar img 3.png";

const Sidebar = ({ setSidebar, darkmood, language }) => {
  return (
    <div className={darkmood ? "sidebar sidebar_tun" : "sidebar"}>
      <div className="sidebar_header">
        <div className="sidebar_contact_icons">
          <BiSolidContact />
        </div>
        <h2 className="sidebar_title">
          {
            language === "UZ" ? "CRM PANEL" : "CRM PANEL"
          }
        </h2>
        <MdMenuOpen
          onClick={() => setSidebar(false)}
          className="sidebar_active_icons"
        />
      </div>

      <ul>
        <Link to="/" className="hover_div">
          <li>
            <GoHome className="saidbar_icons" />
            {
              language === "UZ" ? "Xisobot" : "Report"
            }
          </li>
          <p className="line1"></p>
        </Link>
        <Link to="/oquvchilar" className="hover_div">
          <li>
            <img className="saidbar_image" src={saidbar_img} alt="img4" />
            {
              language === "UZ" ? "O’quvchilar" : "Pupils"
            }
          </li>
          <p className="line2"></p>
        </Link>
        <Link to="/guruhlar" className="hover_div">
          <li>
            <FaUsers className="saidbar_icons" />
            {
              language === "UZ" ? "Guruhlar" : "Groups"
            }
          </li>
          <p className="line3"></p>
        </Link>
        <Link to="/tolovlar" className="hover_div">
          <li>
            <img className="saidbar_image" src={saidbar_img2} alt="img4" />
            {
              language === "UZ" ? "To’lovlar" : "Payments"
            }
          </li>
          <p className="line4"></p>
        </Link>
        <Link to="/davomat" className="hover_div">
          <li>
            <img className="saidbar_image" src={saidbar_img3} alt="img4" />
            {
              language === "UZ" ? "Davomat" : "Attendance"
            }
          </li>
          <p className="line5"></p>
        </Link>
        <Link to="/murojatlar" className="hover_div">
          <li>
            <img className="saidbar_image" src={saidbar_img4} alt="img4" />
            {
              language === "UZ" ? "Murojaatlar" : "Appeals"
            }
            <p className="saidbar_number">7</p>
          </li>
          <p className="line6"></p>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
