import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

import Counter from "./component/counter.jsx";

let timer = 0;
setInterval(function(){
    const one = Math.floor(timer/1);
    const two = Math.floor(timer/10);
    const three = Math.floor(timer/100);
    const four = Math.floor(timer/1000);
    const five = Math.floor(timer/10000);
    const six = Math.floor(timer/100000);
    timer++;
    ReactDOM.render(<Counter numberOne={one} numberTwo={two} numberThree={three} numberFour={four} numberFive={five} numberSix={six}/>, document.querySelector("#app"));
}, 1000);
