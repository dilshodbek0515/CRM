import "./Davomat.css"
import Attend from "./attend/Attend"
const Davomat = ({ language }) => {
    return (
        <div className="davomat">
            <Attend language={language} />
        </div>
    )
}

export default Davomat