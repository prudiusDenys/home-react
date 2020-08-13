import React from "react";
import classes from "./Button.module.css";

type PropsType = {
	onClickBtnHandler: () => void
	title: string
	typeOfButton?: 'red'
}

export const Button = React.memo(function (props: PropsType){
	console.log('button')
	return (
		<div className={classes.wrapper}>
			<button className={props.typeOfButton === 'red' ? `${classes.btn} ${classes.cngBtn}` : classes.btn}
							onClick={props.onClickBtnHandler}>{props.title}</button>
		</div>
	)
})