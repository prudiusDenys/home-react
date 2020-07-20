import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from "./Input.module.css";

type PropsType = {
	valueInp: string
	setValueInp: (value: string) => void
	correctField?: boolean
	setCorrectField: (correctField: boolean) => void
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
	onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
	placeholderDefault?: string
}

export const Input = (props: PropsType) => {
	return (
		<div className={classes.wrapper}>
			<input className={props.correctField ? classes.input : `${classes.input} ${classes.error}`}
						 onChange={props.onChangeHandler}
						 onKeyPress={props.onKeyPressHandler}
						 value={props.valueInp}
						 placeholder={!props.correctField ? 'This field must be filled' : props.placeholderDefault}
						 type='text'/>
		</div>
	)
}