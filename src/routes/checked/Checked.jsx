import "./Checked.css"
import Checked_table from "./checked_table/Checked_table"

const Checked = ({ language }) => {
    return (
        <div className="Checked">
            <Checked_table language={language} />
        </div>
    )
}

export default Checked