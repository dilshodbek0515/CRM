import "./Onatili.css"
import Onatili_table from "./onatili_table/Onatili_table"


const Onatili = ({ language }) => {
    return (
        <div className="Onatili">
            <Onatili_table language={language} />
        </div >
    )
}

export default Onatili