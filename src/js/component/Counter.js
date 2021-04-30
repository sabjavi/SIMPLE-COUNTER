import React from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	return (
		<div className="row">
			<div className="fa fa-clock fa-3x"></div>
			<div className="contador">{props.numberOne}</div>
			<div className="contador">{props.numberTwo}</div>
			<div className="contador">{props.numberThree}</div>
			<div className="contador">{props.numberFour}</div>
			<div className="contador">{props.numberFive}</div>
			<div className="contador">{props.numberSix}</div>
		</div>
	);
}

Counter.propTypes = {
	numberOne: PropTypes.number,
	numberTwo: PropTypes.number,
	numberThree: PropTypes.number,
	numberFour: PropTypes.number,
	numberFive: PropTypes.number,
	numberSix: PropTypes.number
};
