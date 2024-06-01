import "./Xisobot.css"
import Main from "../../components/main/Main";
import Status from "../../components/status/Status";
import { useEffect } from "react";
const Xisobot = ({ setValue, language, setLanguage, darkmood }) => {
    useEffect(() => {
        setValue("Xisobot");
    }, [setValue]);

    return (
        <div className="Xisobot">
            <Main language={language}
                darkmood={darkmood}
            />
            <Status setLanguage={setLanguage} />
        </div>
    )
}

export default Xisobot;