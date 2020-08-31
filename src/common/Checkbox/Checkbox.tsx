import React from "react";
import classes from "./Checkbox.module.css";

type PropsType = {
	checkbox: boolean
	onClickCheckbox: ()=>void
}

export const Checkbox = React.memo((props: PropsType) => {
	console.log('checkbox')
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
})