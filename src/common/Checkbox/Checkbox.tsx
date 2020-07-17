import React from "react";
import classes from "./Checkbox.module.css";

type PropsType = {
	checkbox: boolean
	onClickCheckbox: ()=>void
}

export const Checkbox = (props: PropsType) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.box} onClick={props.onClickCheckbox}>
				{
					(props.checkbox) && <div>
            <span className={classes.check}></span>
            <span className={classes.check}></span>
          </div>
				}
			</div>
		</div>
	)
}