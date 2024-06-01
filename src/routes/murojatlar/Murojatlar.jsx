import "./Murojatlar.css"
import Murojat_table_one from "./murojat_table_one/Murojat_table_one"
import Murojat_table_two from "./murojat_table_two/Murojat_table_two"
const Murojatlar = ({ language }) => {
    return (
        <div className="Murojatlar">
            <Murojat_table_one language={language} />
            <Murojat_table_two language={language} />
        </div>
    )
}

export default Murojatlar