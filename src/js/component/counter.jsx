import React from "react";

import propTypes from "prop-types";
import react from "react";

const Counter = (props) => {
    return (
        <div className="container">
            <div className="clock"><i className="fa-regular fa-clock"></i></div>
            <div className="six">{props.numberSix % 10}</div>
            <div className="five">{props.numberFive % 10}</div>
            <div className="four">{props.numberFour % 10}</div>
            <div className="three">{props.numberThree % 10}</div>
            <div className="two">{props.numberTwo % 10}</div>
            <div className="one">{props.numberOne % 10}</div>
        </div>
    );
};

Counter.propTypes = {
    numberOne: propTypes.number,
    numberTwo: propTypes.number,
    numberThree: propTypes.number,
    numberFour: propTypes.number,
    numberFive: propTypes.number,
    numberSix: propTypes.number
}

export default Counter;
