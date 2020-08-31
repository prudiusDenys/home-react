import React, {useState, MouseEvent} from "react";
import classes from "./RangeDoubleSlider.module.css";

export const RangeDoubleSlider = React.memo(() => {

	const [firstCircle, setFirstCircle] = useState(0)
	const [secondCircle, setSecondCircle] = useState(400)

	const styleFirst = {
		left: firstCircle + 'px',
		top: 0 + 'px'
	}
	const styleSecond = {
		left: secondCircle + 'px',
		top: 0 + 'px'
	}

	const onMouseMoveHandler = (e: MouseEvent<HTMLSpanElement>) => {

		if (e.pageX < 100 || e.pageX>500) {
			e.preventDefault()
		} else {
			setFirstCircle(e.pageX - 100)
		}
	}
	const onMouseMoveSecond = (e: MouseEvent<HTMLSpanElement>) => {
		if (e.pageX > 500 || e.pageX < 100) {
			e.preventDefault()
		} else {
			setSecondCircle(e.pageX - 100)
		}
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.price}> Выберите цену</div>
			<div className={classes.line}>
				<span style={styleFirst} onMouseMove={onMouseMoveHandler} className={`${classes.circle} ${classes.first}`}>
					<p>{firstCircle}</p>
				</span>
				<span style={styleSecond} onMouseMove={onMouseMoveSecond} className={`${classes.circle} ${classes.second}`}>
					<p>{secondCircle}</p>
				</span>
			</div>
		</div>
	)
})