import "./Guruhlar.css"
import New_group from "./new_group/New_group"
import Exist_group from "./exist_group/Exist_group"
const Guruhlar = ({ language }) => {
    return (
        <div className="Guruhlar">
            <New_group language={language} />
            <Exist_group language={language} />
        </div>
    )
}

export default Guruhlar