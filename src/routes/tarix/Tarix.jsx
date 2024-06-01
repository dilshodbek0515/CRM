import "./Tarix.css"
import Tarix_table from "./tarix_table/Tarix_table"
const Tarix = ({ language }) => {
    return (
        <div className="Tarix">
            <Tarix_table language={language} />
        </div >
    )
}

export default Tarix