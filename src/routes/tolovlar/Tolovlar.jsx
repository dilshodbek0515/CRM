import "./Tolovlar.css"
import Payments from "./payments/Payments"
import Paydments from "./paydments/Paydments"

const Tolovlar = ({ language }) => {
    return (
        <div className="Tolovlar">
            <Payments language={language} />
            <Paydments language={language} />
        </div>
    )
}

export default Tolovlar