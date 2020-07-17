import React from "react";
import classes from "./Button.module.css";

type btnType = 'delete' | 'cancel' | 'closed';

type PropsType = {
	onClickBtnHandler: () => void
	title: string
	typeOfButton?: btnType
}

export const Button = (props: PropsType) => {
	return (
		<div className={classes.wrapper}>
			<button className={props.typeOfButton === 'delete' ? `${classes.btn} ${classes.cngBtn}` : classes.btn}
							onClick={props.onClickBtnHandler}>{props.title}</button>
		</div>
	)
}