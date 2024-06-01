import { useEffect } from "react";
import "./Oquvchilar.css"
import New_pupil from "./new_pupil/New_pupil"
import Our_pupil from "./our_pupil/Our_pupil"

const Oquvchilar = ({ setValue, language }) => {
    useEffect(() => {
        setValue("Oquvchilar");
    }, [setValue]);

    return (
        <div className="Oquvchilar">
            <New_pupil language={language} />
            <Our_pupil language={language} />
        </div>
    )
}

export default Oquvchilar;
