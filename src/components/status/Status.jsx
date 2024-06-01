import "./Status.css"
import status from "../../assets/image/statistika.png"
const Status = () => {
  return (
    <div className="Status">
      <img className="status_img" src={status} alt="status_img" />
    </div>
  )
}

export default Status