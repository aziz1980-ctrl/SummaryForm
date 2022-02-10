import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Poll from "./poll/poll";
function App() {
  return (
    <div className="AppDevMain">
      <h2>טופ-טרוניקס</h2>
      <div className="customText">מאחלת לכם שנה טובה</div>
      <h1>2022</h1>
      <div className="customText">עם בריאות, אושר ושפע של פרנסה</div>
      <div>
        <h2 className="headRed">טופ-טרוניקס</h2>
      </div>
      <div>ואתר המכירות</div>
      <div className="headRed">
        <h2>
          <a href="https://tmdealz.com" target="_blank">
            TMDEALZ.COM
          </a>
        </h2>
      </div>
      <div>(אתר המכירות הסיטונאי הראשון לאביזירי סלולר)</div>
      <h2 className="headRed">מסכמים שנת 2021</h2>
      <div>ומתייעלים ב 2022</div>
      <div>כחלק משיפור השירות והתייעלות</div>
      <div>נשמח אם תשתתפו במילוי שאלון קצר</div>
      <Poll title="שאלון"></Poll>
    </div>
  );
}

export default App;
