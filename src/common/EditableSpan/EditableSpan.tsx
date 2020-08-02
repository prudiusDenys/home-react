import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from "./EditableSpan.module.css";
import {Input} from "../Input/Input";


type PropsType = {
	editMode: boolean
	valueInp: string
	onBlurHandler: ()=>void
	onClickHandler:()=>void
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
	correctField: boolean
	onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>)=>void
}

export const EditableSpan = (props: PropsType) => {

	return (
		<div className={classes.editSpanWrapper}>
			{
				props.editMode ?
					<Input onChangeHandler={props.onChangeHandler}
								 valueInp={props.valueInp}
								 onBlurHandler={props.onBlurHandler}
								 autoFocus={true}
								 correctField={props.correctField}
								 placeholderDefault={'Write your status'}
								 onKeyPressHandler={props.onKeyPressHandler}/> :
					<span className={classes.span}
								onClick={props.onClickHandler}>{props.valueInp !== '' ? props.valueInp : "You don't have any status"}</span>
			}
		</div>
	)
}