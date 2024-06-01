import "./Routes.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Xisobot from "./xisobot/Xisobot";
import Oquvchilar from "./oquvchilar/Oquvchilar"
import Guruhlar from "./guruhlar/Guruhlar"
import Tolovlar from "./tolovlar/Tolovlar"
import Davomat from "./davomat/Davomat"
import Murojatlar from "./murojatlar/Murojatlar"
import Matematika from "./matematika/Matematika"
import Onatili from "./onatili/Onatili"
import Informatika from "./informatika/Informatika"
import Fizika from "./fizika/Fizika"
import Kimyo from "./kimyo/Kimyo"
import Tarix from "./tarix/Tarix"
import Checked from "./checked/Checked";
import Checked2 from "./checked2/Checked2";
import Checked3 from "./checked3/Checked3";
import Checked4 from "./checked4/Checked4";
import Checked5 from "./checked5/Checked5";
import Checked6 from "./checked6/Checked6";
import { useState, useEffect } from "react";

const Routes = ({ setSidebar, sidebar, setDarkmood, darkmood, language, setLanguage }) => {
  const [value, setValue] = useState("Xisobot");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/oquvchilar":
        setValue("Oquvchilar");
        break;
      case "/guruhlar":
        setValue("Guruhlar");
        break;
      case "/tolovlar":
        setValue("Tolovlar");
        break;
      case "/davomat":
        setValue("Davomat");
        break;
      case "/murojatlar":
        setValue("Murojatlar");
        break;
      case "/matematika":
        setValue("Matematika");
        break;
      case "/onatili":
        setValue("Onatili");
        break;
      case "/informatika":
        setValue("Informatika");
        break;
      case "/fizika":
        setValue("Fizika");
        break;
      case "/kimyo":
        setValue("Kimyo");
        break;
      case "/tarix":
        setValue("Tarix");
        break;
      default:
        setValue("Xisobot");
    }
  }, [location.pathname]);

  return (
    <div className="routes">
      <Header
        value={value}
        darkmood={darkmood} setDarkmood={setDarkmood}
        sidebar={sidebar} setSidebar={setSidebar}
        language={language}
        setLanguage={setLanguage}
      />

      <Switch>
        <Route exact path="/">
          <Xisobot setValue={setValue}
            language={language}
            darkmood={darkmood}
          />
        </Route>
        <Route path="/oquvchilar">
          <Oquvchilar
            setValue={setValue}
            language={language}
          />
        </Route>
        <Route path="/guruhlar">
          <Guruhlar language={language} />
        </Route>
        <Route path="/tolovlar">
          <Tolovlar language={language} />
        </Route>
        <Route path="/davomat">
          <Davomat language={language} />
        </Route>
        <Route path="/murojatlar">
          <Murojatlar language={language} />
        </Route>
        <Route path="/matematika">
          <Matematika language={language} />
        </Route>
        <Route path="/onatili">
          <Onatili language={language} />
        </Route>
        <Route path="/informatika">
          <Informatika language={language} />
        </Route>
        <Route path="/fizika">
          <Fizika language={language} />
        </Route>
        <Route path="/kimyo">
          <Kimyo language={language} />
        </Route>
        <Route path="/tarix">
          <Tarix language={language} />
        </Route>
        <Route path="/checked">
          <Checked language={language} />
        </Route>
        <Route path="/checked2">
          <Checked2 language={language} />
        </Route>
        <Route path="/checked3">
          <Checked3 language={language} />
        </Route>
        <Route path="/checked4">
          <Checked4 language={language} />
        </Route>
        <Route path="/checked5">
          <Checked5 language={language} />
        </Route>
        <Route path="/checked6">
          <Checked6 language={language} />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
