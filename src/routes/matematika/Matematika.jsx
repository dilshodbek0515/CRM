import "./Matematika.css"
import Matematika_table from "./matematika_table/Matematika_table"

const Matematika = ({ language }) => {
    return (
        <div className='Matematika'>
            <Matematika_table language={language} />
        </div>
    )
}

export default Matematika