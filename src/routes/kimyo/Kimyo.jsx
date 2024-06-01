import "./Kimyo.css"
import Kimyo_table from "./kimyo_table/Kimyo_table"

const Kimyo = ({ language }) => {
    return (
        <div className="Kimyo">
            <Kimyo_table language={language} />
        </div>
    )
}

export default Kimyo