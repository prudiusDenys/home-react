import React, {ChangeEvent, FocusEvent, KeyboardEvent} from "react";
import classes from "./Input.module.css";

type PropsType = {
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
	valueInp: string
	onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
	correctField: boolean
	placeholderDefault?: string
	onBlurHandler?: ()=>void
	autoFocus?:boolean
}

export const Input = (props: PropsType) => {
	return (
		<div className={classes.wrapper}>
			<input className={props.correctField ? classes.input : `${classes.input} ${classes.error}`}
						 onChange={props.onChangeHandler}
						 onKeyPress={props.onKeyPressHandler}
						 onBlur={props.onBlurHandler}
						 value={props.valueInp}
						 placeholder={!props.correctField ? 'This field must be filled' : props.placeholderDefault}
						 autoFocus={props.autoFocus}
						 type='text'/>
		</div>
	)
}